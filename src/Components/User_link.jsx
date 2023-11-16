import React from 'react'

const User_link = ({title}) => {
    return (
        <div className='User-link'>
            <div>
                <span>{title}</span><br/>
                <span className='dot'>...........................................................</span>
            </div>
        </div>
    )
}

export default User_link
