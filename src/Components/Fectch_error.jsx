import React from 'react'
import error from '../Images/load-error.svg'

const Fectch_error = (props) => {
    return (
        <div className='fetch-error'>
            <img src={error} alt="" />
            <span>ERROR!</span>
        </div>
    )
}

export default Fectch_error
