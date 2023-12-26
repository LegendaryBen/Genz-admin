import React,{useContext} from 'react'
import find from '../Images/search.svg'
import { Link } from 'react-router-dom'
import { NavContext } from '../context api/Nav'



const Navbar = (props) => {

    const {slide, setSlide} = useContext(NavContext);


    
    const logout = ()=>{

        localStorage.removeItem("genz-author");
        window.location.reload();

    }


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

            <Link className='nav-btn1' to='/authors' onClick={()=>{setSlide(false)}}>
                <span className="material-symbols-outlined">grid_view</span>
                <div>Home</div>
            </Link>

            <Link className='nav-btn1' to='stories' onClick={()=>{setSlide(false)}} >
                <span className="material-symbols-outlined">edit_square</span>
                <div>New Stories</div>
            </Link>

            <Link className='nav-btn1' to="magazines" onClick={()=>{setSlide(false)}}>
                <span className="material-symbols-outlined">menu_book</span>
                <div>Magazine Stories</div>
            </Link>

            <Link className='nav-btn2' to='drafts' onClick={()=>{setSlide(false)}}>
                <div className='nav-first'>
                    <span className="material-symbols-outlined">drafts</span>
                    <div>Drafts</div>
                </div>
                <div className="badge2">
                    5
                </div>
            </Link>

            <Link className='nav-btn1'  onClick={logout}>
                <span className="material-symbols-outlined">logout</span>
                <div>Log out</div>
            </Link>

        </div>
    )
}

export default Navbar
