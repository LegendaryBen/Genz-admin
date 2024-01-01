import React from 'react'

const Modal_btn = ({label,cls,cancle}) => {
    return (
        <div className={`modal-save ${cls}`} onClick={()=>cancle(false)}>
            {label}
        </div>
    )
}

export default Modal_btn
