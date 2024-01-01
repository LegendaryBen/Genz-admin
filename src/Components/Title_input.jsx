import React from 'react'

const Title_input = ({val,change}) => {
    return (
        <input type="text" value={val} className='title-input' onChange={(e)=>change(e.target.value)}/>
    )
}

export default Title_input
