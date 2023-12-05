import { Link } from "react-router-dom"
import chima from '../Images/chima.jpg'
import Block_btn from "./Block_btn"
import Edit from "./Edit"




const Users_card2 = (props) => {
    return (
        <div className="Users_card">
            <div className="main_image">
                <img src={chima} alt="" />
                {/* <span className="material-symbols-outlined">person</span> */}
                <div className="user_detail">
                    Benjamin Chimaobi
                </div>
            </div>
            <div className="user_edit">
                <Block_btn text="Send Notification" color="blk-empty"/>
                <Edit/>
                <Block_btn text="Block User" color="blk-filled"/>
            </div>
        </div>
    )
}

export default Users_card2
