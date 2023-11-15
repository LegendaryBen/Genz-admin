import React from 'react'
import { Link } from 'react-router-dom'
import draft from '../Images/draft.jpg'

const Story_crad2 = (props) => {
    return (
        <Link className='card2'>
            <img src={draft} alt="" />
            <div>
                {/* <div className="card-header">
                    Tech
                </div> */}
                <div className="card-header-empty"></div>
                {/* <div className="card-topic">
                    The Best Headphones And Earbuds To Treat Your Ears To An Immersive Concert
                </div> */}
                <div className="card-topic-empty"></div>
                <div className="card-author">
                    By Benjamin chukwuezi
                </div>
                <div className="card-date">
                    July 4, 2023
                </div>
            </div> 
        </Link>
    )
}

export default Story_crad2
