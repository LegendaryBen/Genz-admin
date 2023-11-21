import React from 'react'
import Submit_story from './Submit-story'



const Submit_Section = (props) => {
    return (
        <div className='submit-section'>
            <Submit_story cls='black' text='Save to drafts'/>
            <Submit_story cls='green' text='Publish'/>
        </div>
    )
}

export default Submit_Section
