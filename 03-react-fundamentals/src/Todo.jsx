import React from 'react';

export default function Todo({children}) {
    return (
        children.map(child=><li>{child}</li>)
    );
}