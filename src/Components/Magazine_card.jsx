import chima from "../Images/chima.jpg"
import logo from "../Images/logo.svg"
import { Link } from "react-router-dom"




const Magazine_card = (props) => {
    return (
        <Link className="magazine_card">
            <img className="img" src={chima} alt="" />
            <div>
                <div className="mgz-cat">Magazine</div>
                <div className="mgz-topic">
                    The Best Headphones And Earbuds To Treat Your Ears To An Immersive Concert
                </div>
                <div className="mgz-logo">
                    <img src={logo} alt="" />
                    <span>GEN-Z SQUARE Magazine</span>
                </div>
                <div className="mgz-date">
                    September 2023
                </div>
            </div>
        </Link>
    )
}

export default Magazine_card
