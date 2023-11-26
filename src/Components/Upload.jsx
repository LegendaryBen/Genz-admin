import React from 'react'
import frame from '../Images/frame.svg'

const Upload = () => {
    return (
        <div className='upload'>
            <div className="story-cover-image">
                Story Cover Image
            </div>
            <div className="image-support">
                We support PNGs and JPEGs  under 2MB
            </div>
            <img src={frame} alt=""  className='clicked'/>
        </div>
    )
}

export default Upload
