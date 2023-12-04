import React from 'react'
import Upload_warn from '../Components/Upload-warn'
import Story from '../Components/Story'
import Sepcial_input from '../Components/Sepcial_input'
import Special_submit from '../Components/Special_submit'



const Admin_notification = (props) => {
    return (
        <div className='admin_notication'>
            <Upload_warn/>
            <Sepcial_input label="Heading"/>
            <Story/>
            <Special_submit text="Send"/>
        </div>
    )
}

export default Admin_notification
