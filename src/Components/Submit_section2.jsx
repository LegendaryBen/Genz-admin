import React from 'react'
import Submit_story from './Submit-story'



const Submit_section2 = ({change1,change2}) => {
    return (
        <div className='submit-section'>
            <Submit_story cls='red' text='Delete' change1={change2}/>
            <Submit_story cls='green' text='Save Edit' change1={change1}/>
        </div>
    )
}

export default Submit_section2
