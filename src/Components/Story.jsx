import React from 'react'
import Label from './Label'
import Textarea from './Textarea'


const Story = (props) => {
    return (
        <div className='upload-title'>
            <Label label='Story'/><br/>
            <Textarea/>
        </div>
    )
}

export default Story
