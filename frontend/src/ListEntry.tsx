import React from 'react';

interface Props {
    entry: Object
}

const ListEntry = ({entry}: Props) => {
    return(
        <div className='ListEntry'>
            <div>
                {/* Store name */}
            </div>
            <div>
                {/* address */}
            </div>
            <div>
                {/* wait time */}
            </div>
        </div>
    )
}

export default ListEntry;