import React from "react";
import { Store } from "../../actions/nearby-wait-time";
import ListEntry from "./ResultList/ListEntry";
import "./ResultList.scss";

interface Props {
    locations: Store[];
}

const ResultList = ({ locations }: Props) => {
    const emptyList = (
        <div>Input your location to get a list of recommendations!</div>
    );

    return (
        <div className="resultlist__container">
            <div className="resultlist">
                {locations.map((loc) => (
                    <ListEntry entry={loc} key={loc.storeId} />
                ))}

                {locations.length === 0 && emptyList}
            </div>
        </div>
    );
};

export default ResultList;
