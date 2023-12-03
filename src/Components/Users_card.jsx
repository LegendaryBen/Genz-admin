import { Link } from "react-router-dom"
import chima from '../Images/chima.jpg'
import Block_btn from "./Block_btn"



const Users_card = (props) => {
    return (
        <Link className="Users_card">
            <div className="main_image">
                <img src={chima} alt="" />
                {/* <span className="material-symbols-outlined">person</span> */}
                <div className="user_detail">
                    Benjamin Chimaobi
                </div>
            </div>
            <div className="user_edit">
                <Block_btn text="Send Notification" color="blk-empty"/>
                <Block_btn text="Block User" color="blk-filled"/>
            </div>
        </Link>
    )
}

export default Users_card
