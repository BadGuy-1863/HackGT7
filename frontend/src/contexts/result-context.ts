import React, { createContext } from "react";
import { Store } from "../actions/nearby-wait-time";

export const ResultContext = createContext([[], () => {}] as [
    Store[],
    React.Dispatch<React.SetStateAction<Store[]>>
]);
