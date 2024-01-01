import React from 'react'
import Label from './Label'
import Textarea from './Textarea'


const Story = ({val,change}) => {
    return (
        <div className='upload-title'>
            <Label label='Story'/><br/>
            <Textarea val={val} change={change}/>
        </div>
    )
}

export default Story
