import React from 'react'
import find from '../Images/search.svg'
import { Link } from 'react-router-dom'



const Navbar = (props) => {
    return (
        <div className='Navbar'>

            <div className="nav-user">
                <div className="nav-name">
                    <span class="material-symbols-outlined">person</span>
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
                <span className="material-symbols-outlined">close</span>
            </div>

            <div className="search-box2">
                <img src={find} alt="" />
                <input type="text" placeholder='Search..'/>
            </div>

            <Link className='nav-btn1'>
                <span className="material-symbols-outlined">grid_view</span>
                <div>Home</div>
            </Link>

            <Link className='nav-btn1'>
                <span className="material-symbols-outlined">edit_square</span>
                <div>New Stories</div>
            </Link>

            <Link className='nav-btn1'>
                <span className="material-symbols-outlined">menu_book</span>
                <div>Magazine Stories</div>
            </Link>

            <Link className='nav-btn2'>
                <div className='nav-first'>
                    <span className="material-symbols-outlined">drafts</span>
                    <div>Drafts</div>
                </div>
                <div className="badge2">
                    5
                </div>
            </Link>

            <Link className='nav-btn1'>
                <span class="material-symbols-outlined">logout</span>
                <div>Log out</div>
            </Link>

        </div>
    )
}

export default Navbar
