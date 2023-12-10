import React from 'react'
import fancy from '../Images/fancy.jpg'
import Login_Header from '../Components/Login_Header'
import Error from '../Components/Error'
import User_link from '../Components/User_link'
import Nav_Link from '../Components/Nav_Link'
import Option from '../Components/Option'
import Inputs from '../Components/Inputs'
import Submit from '../Components/Submit'
import Loader from '../Components/Loader'




const Admin = () => {
    return (
        <div className='login'>
                <div className="login-details">
                    <Login_Header/>
                    <div className='container1'>
                        <Error/>
                        <User_link  title="ADMIN  DASHBOARD"/>
                        <Nav_Link title="Login As Author" to="/"/>
                        <Option/>
                        <Inputs label='Email' placeholder="Enter  email"/>
                        <Inputs label='Password' placeholder="Enter  password"/>
                        <Submit/>
                    </div>
                </div>
                <div className="img-block">
                        <img src={fancy} alt="" />
                </div>
                {/* <Loader/> */}
        </div>
    )
}

export default Admin
