import React from 'react'
import FileForm from './FileForm'

const MyActivities = ({ uploadPost }) => {
  return (
    <div>My Activities: messages and posts
      <FileForm uploadPost={uploadPost} />
    </div>
  )
}

export default MyActivities