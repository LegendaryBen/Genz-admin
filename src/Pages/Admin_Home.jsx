import Home_first from "../Components/Home_first"
import Home_users from "../Components/Home_users"
import { fetchAuthors } from "../Redux/features/authors/authorsSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"





const Admin_Home = (props) => {

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(fetchAuthors());

    },[])

    return (
        <div className='admin_home'>
            <Home_first/>
            <Home_users/>
        </div>
    )
}

export default Admin_Home
