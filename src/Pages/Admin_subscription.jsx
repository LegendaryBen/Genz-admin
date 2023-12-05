import { Link } from "react-router-dom"
import Subscription_card from "../Components/Subscription_card"
import Modal2 from "../Components/Modal2"


const Admin_subscription = (props) => {
    return (
        <div className='admin-subcription'>
            <div className="magazine-btn">
                <div className="mgn-topic">
                    Subscribed accounts
                </div>
                <Link>
                    <span className="material-symbols-outlined">add</span>
                    <div> Add New Magazine</div>
                </Link>
            </div>
            <Subscription_card/>
            <Subscription_card/>
            <Subscription_card/>
            {/* <Modal2/> */}
        </div>
    )
}

export default Admin_subscription
