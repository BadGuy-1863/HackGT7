import React from "react";
import { Store } from "../../actions/nearby-wait-time";

interface Props {
    entry: Store;
}

const ListEntry = ({ entry }: Props) => {
    return (
        <div className="ListEntry">
            <div>{"Store Name"}</div>
            <div>{entry.address.street}</div>
            <div>{entry.waitTime.toString()}</div>
        </div>
    );
};

export default ListEntry;
