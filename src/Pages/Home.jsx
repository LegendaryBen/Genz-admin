import React from 'react'
import Story_cards from '../Components/Story-cards'

const Home = (props) => {
    return (
        <>
            <div className='snippets'>
                <div className="snippet-header">
                    New Stories
                </div>
                <Story_cards/>
                <Story_cards/>
            </div>
            <div className='snippets'>
                <div className="snippet-header">
                    Magazine Stories
                </div>
                <Story_cards/>
                <Story_cards/>
                <Story_cards/>
            </div>
        </>
    )
}

export default Home
