import React from 'react'

const Modal_btn = ({label,cls}) => {
    return (
        <div className={`modal-save ${cls}`}>
            {label}
        </div>
    )
}

export default Modal_btn
