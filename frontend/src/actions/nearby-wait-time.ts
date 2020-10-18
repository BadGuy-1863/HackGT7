import axios, { AxiosResponse } from "axios";
import { Duration } from "../duration";
import { Coordinates } from "./request-address";

export interface Address {
    city: string;
    country: string;
    postalCode: string;
    state: string;
    street: string;
}

interface APIStore {
    store_id: string;
    wait_time: string;
    address: Address;
    coordinates: {
        latitude: number;
        longitude: number;
    };
}

export interface Store {
    storeId: string;
    waitTime: Duration;
    address: Address;
    coordinates: Coordinates;
    driveTime: Duration;
}

interface Result {
    times: APIStore[];
}

const convertStore = (store: APIStore, driveTime: number): Store => {
    return {
        storeId: store.store_id,
        address: store.address,
        waitTime: Duration.fromStr(store.wait_time),
        coordinates: {
            lat: store.coordinates.latitude,
            lng: store.coordinates.longitude,
        },
        driveTime: new Duration({ seconds: driveTime }),
    };
};

/**
 * Searches for nearby restaurants and returns the wait times
 * @param latitude the user's latitude
 * @param longitude the user's longitude
 * @param radius the radius to search in
 */
const queryBackend = async (
    latitude: number,
    longitude: number,
    radius: number
) => {
    const url = "localhost:5000/times";

    try {
        const result: AxiosResponse<Result> = await axios.get(url, {
            params: {
                lat: latitude,
                lon: longitude,
                rad: radius,
            },
        });

        const data = result.data;

        return data.times;
    } catch (e) {
        console.error(e);
        throw "Failed to fetch from the API";
    }
};

/**
 * Calculates driving time from start to various distances
 * @param start The starting location
 * @param dest The destination stores
 */
const calculateDriveTime = async (
    start: Coordinates,
    dest: APIStore[]
): Promise<number[]> => {
    const baseUrl = "https://maps.googleapis.com/maps/api/distancematrix/json";
    const origin = encodeURI(`${start.lat},${start.lng}`);

    const destinations = encodeURI(
        dest
            .map(
                (st) => `${st.coordinates.latitude},${st.coordinates.longitude}`
            )
            .join("|")
    );
    const key = process.env.REACT_APP_GOOGLE_API_KEY;

    try {
        const response = await axios.get(baseUrl, {
            params: {
                units: "imperial",
                origins: origin,
                key,
                destinations,
            },
        });

        const values = response.data?.rows?.[0]?.elements ?? undefined;
        if (values === undefined) {
            console.error("Distances unable to be calculated");
            return dest.map((d) => 0);
        }

        return values.map((res: any) =>
            res.status === "OK" ? (res.distance.value as number) : 0
        );
    } catch (e) {
        console.error(e);
        return dest.map((d) => 0);
    }
};

/**
 * Searches backend for stores within {radius} miles of the given location
 * @param latitude The latitude
 * @param longitude The longitude
 * @param radius The radius to search in, in miles
 */
export const waitTime = async (
    latitude: number,
    longitude: number,
    radius: number
) => {
    const storeLocations = await queryBackend(latitude, longitude, radius);
    const driveTimes = await calculateDriveTime(
        { lat: latitude, lng: longitude },
        storeLocations
    );

    const stores = [];
    for (let i = 0; i < storeLocations.length; i++) {
        stores.push(convertStore(storeLocations[i], driveTimes[i]));
    }
    return stores;
};
