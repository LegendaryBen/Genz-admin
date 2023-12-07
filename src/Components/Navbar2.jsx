import React,{useContext} from 'react'
import find from '../Images/search.svg'
import { Link } from 'react-router-dom'
import { NavContext } from '../context api/Nav'



const Navbar2 = (props) => {

    const {slide, setSlide} = useContext(NavContext);


    return (
        <div className='Navbar'  style={{left:!slide ? "-100%" : "0%",transition: "all 0.5s"}}>

            <div className="nav-user">
                <div className="nav-name">
                    <span className="material-symbols-outlined">person</span>
                    <div className='name-container'>
                        <div>
                            <div className="main-name">
                                Solomon s.
                            </div>
                            <div className="nav-author">
                                Author
                            </div>
                        </div>
                    </div>
                </div>
                <span className="material-symbols-outlined" onClick={()=>{setSlide(false)}}>close</span>
            </div>

            <div className="search-box2">
                <img src={find} alt="" />
                <input type="text" placeholder='Search..'/>
            </div>

            <Link className='nav-btn1' to='/admin-dashboard' onClick={()=>{setSlide(false)}}>
                <span className="material-symbols-outlined">grid_view</span>
                <div>Home</div>
            </Link>

            <Link className='nav-btn1' to='admin-upload' onClick={()=>{setSlide(false)}} >
                <span className="material-symbols-outlined">edit_square</span>
                <div>New Magazine</div>
            </Link>

            <Link className='nav-btn1' to='all-magazines' onClick={()=>{setSlide(false)}}>
                <span className="material-symbols-outlined">menu_book</span>
                <div>All Magazines</div>
            </Link>

            <Link className='nav-btn1' to='admin-users' onClick={()=>{setSlide(false)}}>
                <span className="material-symbols-outlined">person</span>
                <div>Users</div>
            </Link>

            <Link className='nav-btn1' to='admin-blocked-user' onClick={()=>{setSlide(false)}}>
                <span className="material-symbols-outlined">group_remove</span>
                <div>Blocked Users</div>
            </Link>

            <Link className='nav-btn1' to='admin-notification' onClick={()=>{setSlide(false)}}>
                <span className="material-symbols-outlined">notifications</span>
                <div>Send Notification</div>
            </Link>

            <Link className='nav-btn1' to='admin-subscription' onClick={()=>{setSlide(false)}}>
                <span className="material-symbols-outlined">bookmark</span>
                <div>Subscriptions</div>
            </Link>
            
            <Link className='nav-btn1' to='admin-authors' onClick={()=>{setSlide(false)}}>
                <span className="material-symbols-outlined">group_add</span>
                <div>Add Authors</div>
            </Link>

            <Link className='nav-btn1' onClick={()=>{setSlide(false)}}>
                <span className="material-symbols-outlined">logout</span>
                <div>Log out</div>
            </Link>

        </div>
    )
}

export default Navbar2
