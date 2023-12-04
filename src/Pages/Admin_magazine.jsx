import { Link } from "react-router-dom"
import Magazine_card from "../Components/Magazine_card"



const Admin_magazine = (props) => {
    return (
        <div className='admin_magazine'>
            <div className="magazine-btn">
                <div className="mgn-topic">
                    All Magazines
                </div>
                <Link>
                    <span className="material-symbols-outlined">add</span>
                    <div> Add New Magazine</div>
                </Link>
            </div>
            <Magazine_card/>
            <Magazine_card/>
        </div>
    )
}

export default Admin_magazine
