import { Link } from "react-router-dom"
import Users_card from "./Users_card"


const Home_users = () => {
    return (
        <div className="home_users">
            <div className="view_all">
                <div>
                    Users
                </div>
                <Link>
                    View All
                </Link>
            </div>
            <Users_card/>
            <Users_card/>
            <Users_card/>
            <Users_card/>
        </div>
    )
}

export default Home_users
