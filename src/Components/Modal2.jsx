import Sepcial_input from "./Sepcial_input"
import Upload_warn from "./Upload-warn"
import Special_add from "./Special_add"



const Modal2 = (props) => {
    return (
        <div className='modal2'>
            <div className="modal_content">
                <Upload_warn/>
                <Sepcial_input label="Account email"/>
                <Sepcial_input label="Start date"/>
                <Sepcial_input label="End date"/>
                <Sepcial_input label="Amount"/>
                <Special_add color="#707070" text="Add"/>
            </div>
        </div>
    )
}

export default Modal2
