import axios, { AxiosResponse } from "axios";
import { Duration } from "../duration";

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
}

export interface Store {
    storeId: string;
    waitTime: Duration;
    address: Address;
}

interface Result {
    times: APIStore[];
}

const convertStore = (store: APIStore): Store => {
    return {
        storeId: store.store_id,
        address: store.address,
        waitTime: Duration.fromStr(store.wait_time),
    };
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
    const url = "127.0.0.1:5000/times";

    try {
        const result: AxiosResponse<Result> = await axios.get(url, {
            params: {
                lat: latitude,
                lon: longitude,
                rad: radius,
            },
        });

        const data = result.data;

        const stores = data.times.map((st) => convertStore(st));
        return stores;
    } catch (e) {
        console.error("e");
        throw "Failed to fetch from the API";
    }
};
