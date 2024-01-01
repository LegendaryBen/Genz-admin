import React from 'react'
import frame from '../Images/frame.svg'

const Upload = ({reff}) => {
    return (
        <div className='upload'>
            <div className="story-cover-image">
                Story Cover Image
            </div>
            <div className="image-support">
                We support JPGs and JPEGs  under 2MB
            </div>
            <img src={frame} alt=""  className='clicked' onClick={()=>reff.current.click()}/>
        </div>
    )
}

export default Upload
