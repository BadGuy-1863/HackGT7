import React, { createContext } from "react";

export interface Result {
    store_id: string;
    wait_time: string;
    address: string;
}

export const ResultContext = createContext([[], () => {}] as [
    Result[],
    React.Dispatch<React.SetStateAction<Result[]>>
]);
