import React,{useState,createContext} from 'react'


const NavContext = createContext();



const Nav = ({children}) => {


    const [slide,setSlide] = useState(false);


    return (
        <NavContext.Provider value={{slide,setSlide}}>
            {children}
        </NavContext.Provider>
    )
}

export default Nav
export {NavContext}
