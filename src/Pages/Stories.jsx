import React from 'react'
import { Link } from 'react-router-dom'
import Story_cards from '../Components/Story-cards'

const Stories = (props) => {
    return (
        <>
            <div className="uploads">
                <Link className="upload-btn" to='/authors/upload-story'>
                    <span className="material-symbols-outlined">add</span>
                    <div>Upload New Story</div>
                </Link>
            </div>
            <div className='snippets'>
                <div className="snippet-header">
                    New Stories
                </div>
                <Story_cards/>
                <Story_cards/>
                <Story_cards/>
                <Story_cards/>
                <Story_cards/>
                <Story_cards/>
                <Story_cards/>
            </div>
        </>
    )
}

export default Stories
