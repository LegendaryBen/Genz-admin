import React from 'react'
import Title_input from './Title_input'
import Label from './Label'



const Title = ({title}) => {
    return (
        <div className='upload-title'>
            <Label label={title}/><br/>
            <Title_input/>
        </div>
    )
}

export default Title
