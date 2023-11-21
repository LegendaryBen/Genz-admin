import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = ({cls,content,image,to}) => {
    return (
        <Link to={to} className={cls}>
            <span className="material-symbols-outlined">{image}</span>
            <div>{content}</div>
        </Link>
    )
}

export default Buttons
