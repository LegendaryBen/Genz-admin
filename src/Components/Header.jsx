import React,{useContext} from 'react'
import logo from '../Images/logo.svg'
import chima from '../Images/chima.jpg'
import find from '../Images/search.svg'
import ham from '../Images/ham.svg'
import user from '../Images/user.svg'
import { NavContext } from '../context api/Nav'





const Header = () => {

    const {slide,setSlide} = useContext(NavContext);


    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="logo" />
                <span>GEN-Z SQUARE</span>
            </div>
            <div className="search-box">
                <img src={find} alt="" />
                <input type="text" placeholder='Search..'/>
            </div>
            <div className="avatar">
                <div className='user-img-box'>
                    {/* <img src={user} alt="" /> */}
                    <span className="material-symbols-outlined span">person</span>
                    <div>
                        <span>Agozie. S</span><br/>
                        <span className='author'>Author</span>
                    </div>
                </div>
                <img src={ham} alt="" className='ham' onClick={()=>{setSlide(true)}}/>
            </div>
        </div>
    )
}

export default Header
