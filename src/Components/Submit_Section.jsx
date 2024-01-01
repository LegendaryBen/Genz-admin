import React from 'react'
import Submit_story from './Submit-story'



const Submit_Section = ({change1}) => {
    return (
        <div className='submit-section'>
            <Submit_story cls='black' text='Save to drafts'/>
            <Submit_story cls='green' text='Publish' change1={change1}/>
        </div>
    )
}

export default Submit_Section
