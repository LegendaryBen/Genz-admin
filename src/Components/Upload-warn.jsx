import React from 'react'

const Upload_warn = ({msg,colors}) => {
    return (
        <div className='upload-warn' style={{borderColor:colors,color:colors}}>
            {msg}
        </div>
    )
}

export default Upload_warn
