import React from 'react'

const Submit_story = ({cls,text}) => {
    return (
        <div className={`submit-story ${cls}`}>
            {text}
        </div>
    )
}

export default Submit_story
