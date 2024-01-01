import React from 'react'

const Textarea = ({val,change}) => {
    return (
        <textarea className='textarea' value={val} onChange={(e)=>change(e.target.value)}></textarea>
    )
}

export default Textarea
