import Sepcial_input from "../Components/Sepcial_input"
import Upload_warn from "../Components/Upload-warn"



const Admin_authors = (props) => {
    return (
        <div className="admin-authors">
            <Upload_warn/>
            <Sepcial_input label="Name"/>
            <Sepcial_input label="Email"/>
            <Sepcial_input label="Password"/>
            <div className="add">Add</div>
        </div>
    )
}

export default Admin_authors
