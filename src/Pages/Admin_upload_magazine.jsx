import Sepcial_input from "../Components/Sepcial_input"
import Story from "../Components/Story"
import Upload_warn from "../Components/Upload-warn"
import Upload_Section from "../Components/Upload_Section"
import Special_submit from "../Components/Special_submit"



const Admin_upload_magazine = (props) => {
    return (
        <div className='admin-upload'>
            <Upload_warn/>
            <Sepcial_input label="Title"/>
            {/* <Story/> */}
            <Upload_Section/>
            <Upload_Section/>
            <Special_submit text="Public"/>
        </div>
    )
}

export default Admin_upload_magazine
