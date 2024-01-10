import React from 'react'
import { Link } from 'react-router-dom'
import Story_cards from '../Components/Story-cards'

const Magazine = (props) => {
    return (
        <>
            <div className="uploads">
                <Link className="upload-btn" to='/authors/upload-magazine-story'>
                    <span className="material-symbols-outlined">add</span>
                    <div>Upload magazine Story</div>
                </Link>
            </div>
            <div className='snippets'>
                <div className="snippet-header">
                    Magazine Stories
                </div>
                {/* <Story_cards/>
                <Story_cards/>
                <Story_cards/>
                <Story_cards/>
                <Story_cards/>
                <Story_cards/>
                <Story_cards/> */}
            </div>
        </>
    )
}

export default Magazine
