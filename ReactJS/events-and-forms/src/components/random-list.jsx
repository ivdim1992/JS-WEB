import React from 'react';

const RandomList = ({ randomList = [] }) => (
    <ul>
        {
            randomList.map(smt => (<li>{smt}</li>))
        }
    </ul>
)

export default RandomList;