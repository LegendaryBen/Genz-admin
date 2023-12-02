import React from 'react'
import Header from '../Components/Header'
import Nav_container from '../Components/Nav-container'
import Navbar from '../Components/Navbar'

const Authors = (props) => {

    const navDetails = [
        {
            cls:"route",
            content:"Home",
            image:'grid_view',
            to:""
        },
        {
            cls:"route",
            content:"New Stories",
            image:'edit_square',
            to:'stories'
        },
        {
            cls:"route",
            content:"Magazine Stories",
            image:'menu_book',
            to:'magazines'
        }

    ]

    const draft = {
        status:true,
        cls:'route2',
        content:"Drafts",
        image:'drafts',
        to:'drafts',
        badge:'10'
    }



    return (
        <>
            <Header/>
            <Nav_container details={navDetails} draft={draft}/>
            <Navbar/>
        </>
    )
}

export default Authors
