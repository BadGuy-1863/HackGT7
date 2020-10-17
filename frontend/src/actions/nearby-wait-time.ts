import axios from "axios";

export interface Address {
    city: string;
    country: string;
    postalCode: string;
    state: string;
    street: string;
}

export interface Result {
    storeId: string;
    waitTime: string;
}

export const waitTime = async () => {};
