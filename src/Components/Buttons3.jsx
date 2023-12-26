import React from 'react'
import { Link } from 'react-router-dom'

const Buttons3 = ({to,image,content,click}) => {
    return (
        <Link to={to} onClick={click}>
            <span className="material-symbols-outlined">{image}</span>
            <div>{content}</div>
        </Link>
    )
}

export default Buttons3
