import { useState } from "react"
import Sepcial_input from "../Components/Sepcial_input"
import Error from "../Components/Error"
import Loader from "../Components/Loader"
import axios from "axios"



const Admin_authors = (props) => {

    const[load,setLoad] = useState(false);
    const[color,setColor] = useState("red");
    const[pos,setPos] = useState(false);
    const[message,setMessage] = useState('hello');

    // form

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');


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

                axios.post('https://gen-zsquare.com/api/author',{
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

                    setMessage("New author was created successfully. Check email to activate account!.");
                    setColor("#0BA348");
                    setPos(true);

                    setTimeout(()=>{

                        setMessage("");
                        setColor("red");
                        setPos(false);  

                    },4000)


                }).catch((err)=>{

                    setLoad(false)

                    setMessage("An error occurred while creating a new author!");
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




    return (
        <>
            <div className="admin-authors">
                <Sepcial_input label="Name" val={name} change={setName}/>
                <Sepcial_input label="Email" val={email} change={setEmail}/>
                <Sepcial_input label="Password" val={password} change={setPassword}/>
                <div className="add" onClick={addAuthors}>Add</div>
            </div>
            <Error text={message} colors={color} pos={pos} change={setPos}/>
            {load && <Loader/>}
        </>
       
    )
}

export default Admin_authors
