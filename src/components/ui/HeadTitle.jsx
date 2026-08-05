import React from 'react';

export default function HeadTitle({value, className}) {
    return <>
    <div className={`head-title ${className}`}>
        <span></span>
        <h2>{value}</h2>
    </div>
    </>
}
