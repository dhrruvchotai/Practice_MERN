import React, { useEffect } from 'react'

const Color = ({ color }) => {

    useEffect(() => {
        alert('Color was changed.')

    },[color]);
    
    return (
        <div>I am navbar of {color}.</div>
    )
}


export default Color
