import {createContext,useState} from 'react'


const User = createContext()



const Auth = ({children}) => {

    const[author,setAuthor] = useState(false);
    const[admins,setAdmins] = useState(false);


    return (
        <User.Provider value={{author,setAuthor,admins,setAdmins}}>
            {children}
        </User.Provider>
    )
}

export default Auth
export{User}
