import React from 'react'
import Sidebar from './Sidebar'
import Container from './Container'

const Nav_container = ({details,draft}) => {
    return (
        <div className='nav-container'>
            <Sidebar navDEtails={details} draft={draft}/>
            <Container/>
        </div>
    )
}

export default Nav_container
