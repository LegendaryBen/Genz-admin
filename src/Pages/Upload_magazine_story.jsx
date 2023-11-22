import React from 'react'
import Upload_warn from '../Components/Upload-warn'
import Title from '../Components/Title'
import Story from '../Components/Story'
import Categories from '../Components/Categories'
import Upload_Section from '../Components/Upload_Section'
import Submit_Section from '../Components/Submit_Section'
import Modal from '../Components/Modal'





const Upload_magazine_story = (props) => {
    return (
        <>
            <Upload_warn/>
            <Title title="Title"/>
            <Story/>
            <Categories/>
            <Upload_Section/>
            <Title title="Image Source"/>
            <Title title="Story By"/>
            <Submit_Section />
            {/* <Modal/> */}
        </>
    )
}

export default Upload_magazine_story
