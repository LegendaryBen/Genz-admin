import React from 'react'
import chima from '../Images/chima.jpg'
import { Link } from 'react-router-dom'

const Story_cards = ({items}) => {

    return (
            <Link className='story-cards' to={`/authors/edit-story/${items.id}`}>
                <img src={items?.image} alt="" />
                <div>
                    <div className="card-header">
                        {items?.category}
                    </div>
                    <div className="card-topic">
                        {items?.title.length > 74 ? items?.title.length.slice(0,70)+"...":items?.title}
                    </div>
                    <div className="card-author">
                        By {items?.storyBy}
                    </div>
                    <div className="card-date">
                        {items?.date_added}
                    </div>
                </div>
            </Link>
    )
}

export default Story_cards
