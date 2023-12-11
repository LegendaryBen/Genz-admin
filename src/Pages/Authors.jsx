import {useContext} from 'react'
import Header from '../Components/Header'
import Nav_container from '../Components/Nav-container'
import Navbar from '../Components/Navbar'
import { User } from '../context api/Auth'
import { Navigate } from 'react-router-dom'
import useAuthor from '../custom hooks/useAuthor'




const Authors = (props) => {


    const{author,setAuthor,setAuthorDetail}= useContext(User);

    useAuthor(setAuthor);



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



    return author ? (
        <>
            <Header/>
            <Nav_container details={navDetails} draft={draft}/>
            <Navbar/>
        </>
    ) : <Navigate to='/'/>
}

export default Authors
