import React from 'react'
import warn from '../Images/warning.svg'
import Modal_btn from './Modal_btn'



const Modal = () => {
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
                    Are you sure you want to Publish this story? All of the information will be saved<br/><br/>
                    and uploaded. This story can be edited or deleted later
                </div>
                <div className="modal-btn-container">
                    <Modal_btn label="Publish" cls='publish'/>
                    <Modal_btn label="Cancle" cls='cancle'/>
                </div>
            </div>
        </div>
    )
}

export default Modal
