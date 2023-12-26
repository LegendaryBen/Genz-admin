import Header from '../Components/Header'
import Nav_container from '../Components/Nav-container'
import Navbar2 from '../Components/Navbar2'
import { User } from '../context api/Auth'
import { Navigate } from 'react-router-dom'
import useAdmin from '../custom hooks/useAdmin'
import { useContext } from 'react'


const AdminDashboard = (props) => {


    const{setAdmins,setAdminDetail}= useContext(User);
    let admins = localStorage.getItem("genz-admin")||'';


    useAdmin(setAdmins);


    const navDetails = [
        {
            cls:"route",
            content:"Home",
            image:'grid_view',
            to:""
        },
        {
            cls:"route",
            content:"New Magazine",
            image:'edit_square',
            to:'admin-upload'
        },
        {
            cls:"route",
            content:"All Magazines",
            image:'menu_book',
            to:'all-magazines'
        },
        {
            cls:"route",
            content:"Users",
            image:'person',
            to:'admin-users'
        },
        {
            cls:"route",
            content:"Blocked Users",
            image:'group_remove',
            to:'admin-blocked-user'
        },

        {
            cls:"route",
            content:"Send Notification",
            image:'notifications',
            to:'admin-notification'
        },
        {
            cls:"route",
            content:"Subscriptions",
            image:'bookmark',
            to:'admin-subscription'
        },
        {
            cls:"route",
            content:"Add Authors",
            image:'group_add',
            to:'admin-authors'
        }
    ]

    const draft = {
        status:false,
        cls:'route2',
        content:"Drafts",
        image:'drafts',
        to:'drafts',
        badge:'10'
    }


    return admins !== '' ? (
        <>
            <Header/>
            <Nav_container details={navDetails} draft={draft}/>
            <Navbar2/>
        </>
    ): <Navigate to='/admin'/>
}

export default AdminDashboard
