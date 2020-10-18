import React from "react";

export const RadiusContext = React.createContext([15, () => {}] as [
    number,
    React.Dispatch<React.SetStateAction<number>>
]);
