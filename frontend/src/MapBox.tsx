import React from 'react';
import {MapsComponent} from './MapComponent'
import ResultList from './ResultList'
const MapBox = (props: any) => {
    return (
        <div>
            <MapsComponent/>
            <ResultList locations={[1,2,3,4,5]}/>
        </div>
    )
}
export default MapBox