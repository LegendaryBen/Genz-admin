import React from 'react'

const Inputs = ({label,placeholder}) => {
    return (
        <div className='input-box'>
            <div className='div'>
                <div>{label}<span>*</span></div>
                <input type="text" name="" id="" placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Inputs
