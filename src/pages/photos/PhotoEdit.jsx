import React from 'react'
import { useParams } from 'react-router-dom'

const PhotoEdit = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>PhotoEdit</div>
  )
}

export default PhotoEdit