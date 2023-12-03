import React from 'react'
import { Link } from 'react-router-dom'

const Notify_Block = ({image,total,number,monthly}) => {
    return (
        <Link className='notify_block'>
            <div className='block_first'>
                <span className="material-symbols-outlined">{image}</span>
                <div>
                    {total}
                </div>
            </div>
            <div className='block_second'>
                {number}
            </div>
            <div className="block_third">
                {monthly}
            </div>
        </Link>
    )
}

export default Notify_Block
