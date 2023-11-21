import React from 'react'
import Display_Image from './Display_Image'
import Upload from './Upload'



const Upload_Section = (props) => {
    return (
        <div className='upload-section'>
            <Display_Image/>
            <Upload/>
        </div>
    )
}

export default Upload_Section
