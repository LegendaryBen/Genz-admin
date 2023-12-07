import React from 'react'
import frame from '../Images/frame.svg'
import chima from '../Images/chima.jpg'



const Display_Image = (props) => {
    return (
        <div className='display-image'>
            <input type="file" name="" id="" />
            <div className="img">
                <img src={frame} alt="" />
            </div>
            <img src={chima} alt="" className='img2'/>
            <div className="show-name">
                This is the image name
            </div>
        </div>
    )
}

export default Display_Image
