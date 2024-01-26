import React from 'react'

const Sepcial_input = ({label,val,change}) => {
    return (
        <div className='special_input'>
            <label>{label}<span> *</span></label><br/>
            <input type="text" name="" id=""  value={val} onChange={(e)=>{change(e.target.value)}}/>
        </div>
    )
}

export default Sepcial_input
