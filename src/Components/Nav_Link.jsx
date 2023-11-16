import React from 'react'
import admin from '../Images/admin.svg'
import { Link } from 'react-router-dom'



const Nav_Link = ({title}) => {
    return (
        <div className='navlink'>
            <Link>
                <img src={admin} alt="" />
                <span>{title}</span>
            </Link>
        </div>
    )
}

export default Nav_Link
