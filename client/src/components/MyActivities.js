import React from 'react'
import FileForm from './FileForm'

const MyActivities = ({ uploadPost, newPostImage }) => {
  return (
    <div>My Activities: messages and posts
      <FileForm uploadPost={uploadPost} newPostImage={newPostImage} />
    </div>
  )
}

export default MyActivities