import React, { useState, useEffect } from 'react';

const ComButton = ({ Type = '', ClassName = '', Disabled = false, Name='', onChange = () => { }, onClick = () => { } }) => {

    return (
        <>
            <button disabled={Disabled} type={Type} onChange={onChange} onClick={onClick} className={`${ClassName}`}>{Name}</button>
        </>
    )
}

export default ComButton;