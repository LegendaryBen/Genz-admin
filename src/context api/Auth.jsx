import {createContext,useState} from 'react'


const User = createContext()



const Auth = ({children}) => {

    const[author,setAuthor] = useState(true);
    const[admins,setAdmins] = useState(false);
    const[authorDetail,setAuthorDetail]=useState({});
    const[adminDetail,setAdminDetail]=useState({});


    return (
        <User.Provider value={{author,setAuthor,admins,setAdmins,authorDetail,setAuthorDetail,adminDetail,setAdminDetail}}>
            {children}
        </User.Provider>
    )
}

export default Auth
export{User}
