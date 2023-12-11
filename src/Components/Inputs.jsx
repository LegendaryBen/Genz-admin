import React from 'react'

const Inputs = ({label,placeholder,val,change}) => {
    return (
        <div className='input-box'>
            <div className='div'>
                <div>{label}<span>*</span></div>
                <input type="text" val={val} id="" placeholder={placeholder} onChange={(e)=>{change(e.target.value)}} />
            </div>
        </div>
    )
}

export default Inputs
