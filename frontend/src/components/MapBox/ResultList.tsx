import React from "react";
import { Store } from "../../actions/nearby-wait-time";
import ListEntry from "./ResultList/ListEntry";
import "./ResultList.scss";

interface Props {
    locations: Store[];
}

const ResultList = ({ locations }: Props) => {
    return (
        <div className="resultlist__container">
            <div className="resultlist">
                {locations.map((loc) => (
                    <ListEntry entry={loc} key={loc.storeId} />
                ))}
            </div>
        </div>
    );
};

export default ResultList;
