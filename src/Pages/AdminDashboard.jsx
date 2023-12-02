import Header from '../Components/Header'
import Nav_container from '../Components/Nav-container'



const AdminDashboard = (props) => {

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
            to:'stories'
        },
        {
            cls:"route",
            content:"All Magazines",
            image:'menu_book',
            to:'magazines'
        },
        {
            cls:"route",
            content:"Users",
            image:'person',
            to:'magazines'
        },
        {
            cls:"route",
            content:"Send Notification",
            image:'notifications',
            to:'magazines'
        },
        {
            cls:"route",
            content:"Subscriptions",
            image:'bookmark',
            to:'magazines'
        },
        {
            cls:"route",
            content:"Add Authors",
            image:'group_add',
            to:'magazines'
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


    return (
        <>
            <Header/>
            <Nav_container details={navDetails} draft={draft}/>
        </>
    )
}

export default AdminDashboard
