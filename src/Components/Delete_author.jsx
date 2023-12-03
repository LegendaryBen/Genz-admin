import React from 'react'
import { Link } from 'react-router-dom'

const Delete_author = ({color,text}) => {
    return (
        <Link className={`${color} remove`}>
            {text}
        </Link>
    )
}

export default Delete_author
