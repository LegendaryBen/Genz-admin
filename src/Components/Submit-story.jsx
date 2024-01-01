import React from 'react'

const Submit_story = ({cls,text,change1}) => {
    return (
        <div className={`submit-story ${cls}`} onClick={change1}>
            {text}
        </div>
    )
}

export default Submit_story
