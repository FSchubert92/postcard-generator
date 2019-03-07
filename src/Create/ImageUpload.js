import React, { useState } from 'react'
import styled from 'styled-components'

const FileInput = styled.input`
  margin: 20px;
`

export default function ImageUpload(props) {
  const [selectedImage, setSelectedImage] = useState({ picture: null })
  function fileSelectedHandler(event) {
    setSelectedImage({ picture: event.target.files[0] })
    console.log(selectedImage)
  }
  function onClickHandler() {
    console.log(selectedImage)
  }
  return (
    <div>
      <FileInput type="file" onChange={fileSelectedHandler} />
      <button onClick={onClickHandler}>Upload</button>
    </div>
  )
}
