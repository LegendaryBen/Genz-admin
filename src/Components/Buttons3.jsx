import React from 'react'
import { Link } from 'react-router-dom'

const Buttons3 = ({to,image,content}) => {
    return (
        <Link to={to}>
            <span className="material-symbols-outlined">{image}</span>
            <div>{content}</div>
        </Link>
    )
}

export default Buttons3
