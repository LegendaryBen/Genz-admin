import React from 'react'

const Error = ({text,colors,pos,change}) => {
    return (
        <div className='error' style={{top:pos?"0%":"-200%",backgroundColor:colors}}>
            {text}
            <div>
                <span className="material-symbols-outlined" onClick={()=>change(false)}>close</span>
            </div>
        </div>
    )
}

export default Error
