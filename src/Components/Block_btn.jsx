import React from 'react'
import { Link } from 'react-router-dom'

const Block_btn = ({color,text}) => {
    return (
        <Link className={`blk  ${color}`}>
           {text} 
        </Link>
    )
}

export default Block_btn
