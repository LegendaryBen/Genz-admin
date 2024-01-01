import React,{useRef} from 'react'
import Display_Image from './Display_Image'
import Upload from './Upload'



const Upload_Section = ({preview,image,select,show}) => {

    const img = useRef(null);


    return (
        <div className='upload-section'>
            <Display_Image reff={img} preview={preview} image={image} select={select} show={show}/>
            <Upload reff={img}/>
        </div>
    )
}

export default Upload_Section
