import React from 'react'
import frame from '../Images/frame.svg'
import chima from '../Images/chima.jpg'



const Display_Image = ({reff,preview,image,show,select}) => {
    return (
        <div className='display-image'>
            <input type="file" name="" id="" style={{display:"none"}} ref={reff} onChange={select}/>
            <div className="img">
                <img src={frame} alt="" />
            </div>
            { preview && <img src={show} alt="" className='img2'/>}
            <div className="show-name">
                Select an image file
            </div>
        </div>
    )
}

export default Display_Image
