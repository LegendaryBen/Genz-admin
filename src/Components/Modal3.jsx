import React from 'react'
import warn from '../Images/warning.svg'
import Modal_btn from './Modal_btn'



const Modal3 = ({cancle,up}) => {
    return (
        <div className='modal'>
            <div className="modal-btns">
                <div className="img-container">
                    <img src={warn} alt="" />
                </div>
                <div className="modal-topic">
                    Publish Story
                </div>
                <div className="modal-message">
                    Are you sure you want to delete this story? All of the information will be lost
                    forever.
                </div>
                <div className="modal-btn-container">
                    <Modal_btn label="Delete" cls='publish' cancle={up}/>
                    <Modal_btn label="Cancle" cls='cancle' cancle={cancle}/>
                </div>
            </div>
        </div>
    )
}

export default Modal3
