import React from 'react'
import chima from '../Images/chima.jpg'

const Story_cards = () => {
    return (
        <div className='story-cards'>
            <img src={chima} alt="" />
            <div>
                <div className="card-header">
                    Tech
                </div>
                <div className="card-topic">
                    The Best Headphones And Earbuds To Treat Your Ears To An Immersive Concert
                </div>
                <div className="card-author">
                    By Benjamin chukwuezi
                </div>
                <div className="card-date">
                    July 4, 2023
                </div>
            </div>
        </div>
    )
}

export default Story_cards
