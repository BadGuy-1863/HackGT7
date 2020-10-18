import React from "react";
import { Store } from "../../actions/nearby-wait-time";
import "./ListEntry.scss";

interface Props {
    entry: Store;
}

const ListEntry = ({ entry }: Props) => {
    return (
        <div className="list-entry">
            <div>{"Store Name"}</div>
            <div>{entry.address.street}</div>
            <div>{entry.waitTime.toString()}</div>
        </div>
    );
};

export default ListEntry;
