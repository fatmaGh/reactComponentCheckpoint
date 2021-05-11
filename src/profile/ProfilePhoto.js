import React from 'react'
import photo from './photo.jpg'
import '../App.css'

const ProfilePhoto = () => {
    return (
        <>
            <img className="profilePhoto" src={photo} alt="avatar" width="200px" />
        </>
    )
}

export default ProfilePhoto
