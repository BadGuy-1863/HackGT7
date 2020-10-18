import React from 'react';
import ListEntry from './ListEntry';

interface Props {
    locations: Object[]
}

const ResultList = ({locations}: Props) => {
    return(
        <div className='resultlist'>
            {locations.map(loc => <ListEntry entry={loc}/>)}
        </div>
    );
}

export default ResultList;