import chima from "../Images/chima.jpg"
import Block_btn from "./Block_btn"


const Subscription_card = (props) => {
    return (
        <div className="subscription_card">
            <div className="main_image2">
                <img src={chima} alt="" />
                {/* <span className="material-symbols-outlined">person</span> */}
                <div className="user_detail2">
                    Benjamin Chimaobi
                </div>
            </div>
            <Block_btn color="blk-empty" text="Cancel Subscription"/>
        </div>
    )
}

export default Subscription_card
