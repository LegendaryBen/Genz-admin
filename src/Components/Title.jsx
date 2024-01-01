import React from 'react'
import Title_input from './Title_input'
import Label from './Label'



const Title = ({title,val,change}) => {
    return (
        <div className='upload-title'>
            <Label label={title}/><br/>
            <Title_input val={val} change={change}/>
        </div>
    )
}

export default Title
