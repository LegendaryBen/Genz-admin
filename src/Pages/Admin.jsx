import {useState,useContext} from 'react'
import fancy from '../Images/fancy.jpg'
import Login_Header from '../Components/Login_Header'
import Error from '../Components/Error'
import User_link from '../Components/User_link'
import Nav_Link from '../Components/Nav_Link'
import Option from '../Components/Option'
import Inputs from '../Components/Inputs'
import Submit from '../Components/Submit'
import Loader from '../Components/Loader'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { User } from '../context api/Auth'
import { Navigate } from 'react-router-dom'
import useAdmin from '../custom hooks/useAdmin'






const Admin = () => {

    const[loading,setLoading] = useState(false);
    const[email,setEmail] = useState('');
    const[password,setPassword]= useState('');
    const[message,setMessage]= useState('');
    const[error,setError] = useState(false);

    const{admins,setAdmins,setAdminDetail}= useContext(User);

    useAdmin(setAdmins);


    const logAdmin = ()=>{
        if(email == ""||password == ""){

            setMessage("Input field should not be empty, check properly!");
            setError(true);

        }else{
            setLoading(true)
            axios.post("https://gen-zsquare.com/api/token/",{email,password}).then((res)=>{

                let detail = jwtDecode(res.data.refresh)

                if(detail.is_admin == true){

                    localStorage.setItem("genz-admin",res.data.refresh);
                    setAdmins(true);
                    setAdminDetail(detail);
                    setEmail('');
                    setPassword('');
                    setLoading(false);

                }else{

                    setMessage("You are not a registered author");
                    setError(true);
                    setLoading(false);
                }



            }).catch((err)=>{

                if(err.message == "Network Error"){
                    setMessage(err.message);
                    setError(true);
                    setLoading(false);

                }else{
                    setMessage(err.response.data.detail);
                    setError(true);
                    setLoading(false);
                }

            })

        }
    }




    return !admins ? (
        <div className='login'>
                <div className="login-details">
                    <Login_Header/>
                    <div className='container1'>
                    {error && <Error text={message}/>}
                        <User_link  title="ADMIN  DASHBOARD"/>
                        <Nav_Link title="Login As Author" to="/"/>
                        <Option/>
                        <Inputs label='Email' placeholder="Enter your email" val={email} change={setEmail}/>
                        <Inputs label='Password' placeholder="Enter your password" val={password} change={setPassword}/>
                        <Submit change={logAdmin}/>
                    </div>
                </div>
                <div className="img-block">
                    <img src={fancy} alt="" />
                </div>
                {loading && <Loader/>}
        </div>
    ) : <Navigate to='/admin-dashboard'/>
}

export default Admin
