import {useState,useEffect} from 'react'
import { useParams,Navigate } from 'react-router-dom'
import Sepcial_input from "../Components/Sepcial_input"
import Error from "../Components/Error"
import Loader from "../Components/Loader"
import axios from "axios"
import { useDispatch } from 'react-redux'
import { fetchAuthors } from '../Redux/features/authors/authorsSlice'






const Admin_edit_authors = (props) => {

    const{id} = useParams();
    const dispatch = useDispatch();
    
    const[load,setLoad] = useState(false);
    const[color,setColor] = useState("red");
    const[pos,setPos] = useState(false);
    const[message,setMessage] = useState('hello');

    // form

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');



    useEffect(()=>{

        axios.get(`https://gen-zsquare.com/api/author/${id}`).then((res)=>{

            setName(res.data.name);
            setEmail(res.data.email);

        }).catch((err)=>{

                    setMessage("An error occurred while fetching user details!");
                    setColor("red");
                    setPos(true);


                    setTimeout(()=>{

                        setMessage("");
                        setColor("red");
                        setPos(false);

                    },4000)
                    

        })


    },[])




    const addAuthors = ()=>{

        if(name == "" || email == "" || password == ""){

            setMessage("Input fields must not be empty!");
            setColor("red");
            setPos(true);

            setTimeout(()=>{

                setMessage("");
                setColor("red");
                setPos(false);  

            },4000)

        }else{


            let token = JSON.parse(localStorage.getItem("genz-admin")).access || "";

            if(token == ""){
                window.location.reload()
            }else{
                
                setLoad(true);

                axios.patch(`https://gen-zsquare.com/api/author/${id}`,{
                    name,
                    email,
                    password
                },{
                    headers: {
                      'Authorization': `Bearer ${token}`,
                      'Content-Type': 'application/json',
                    },
                }).then((res)=>{

                    setLoad(false)

                    setMessage("Author details was updated successfully!.");
                    setColor("#0BA348");
                    setPos(true);
                    dispatch(fetchAuthors())

                    setTimeout(()=>{

                        setMessage("");
                        setColor("red");
                        setPos(false);  

                    },4000)


                }).catch((err)=>{



                    setLoad(false)

                    setMessage("An error occurred while updating details!");
                    setColor("red");
                    setPos(true);


                    setTimeout(()=>{

                        setMessage("");
                        setColor("red");
                        setPos(false);

                    },4000)
                    

                })



            }

        }


    }


    return /[0-9]+/.test(id) == true ? (
        <>
            <div className="admin-authors">
                <Sepcial_input label="Name" val={name} change={setName}/>
                <Sepcial_input label="Email" val={email} change={setEmail}/>
                <Sepcial_input label="Password" val={password} change={setPassword}/>
                <div className="add" onClick={addAuthors}>Edit</div>
            </div>
            <Error text={message} colors={color} pos={pos} change={setPos}/>
            {load && <Loader/>}
        </> 
       
    ): <Navigate to='/admin-dashboard'/>




}

export default Admin_edit_authors
