import React from 'react'

const Submit = ({change}) => {
    return (
        <div className='submit'>
            <div onClick={change}>
                Log In
            </div>
        </div>
    )
}

export default Submit
