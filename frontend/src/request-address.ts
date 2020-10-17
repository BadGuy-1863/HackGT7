import axios from "axios";

const processAddress = (address : string) => encodeURI(address)

export const requestCoordinates = async (address: string) => {
    const baseURL = "https://maps.googleapis.com/maps/api/geocode/json"

    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

    console.log(apiKey)
    try {
    const response = await axios.get(baseURL, {
        params: {
            key: apiKey,
            address: processAddress(address)
        },
        responseType: "json"
    }) as any

    console.log(response)

    const coords = response?.results?.[0]?.geometry?.location
    return coords

    } catch (e){
        console.error(e)
        return undefined
    }
}