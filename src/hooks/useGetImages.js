import { useState } from 'react'

export const useGetImages = () => {
  const [imageURL, setImageURL] = useState(null)

  const reader = new FileReader()

  const getImage = e => {
    if (e === '') {
      setImageURL('')
    } else {
      const files = e.target.files
      if (files && files.length) {
        reader.readAsDataURL(files[0])
      }
    }
  }
  reader.onloadend = () => {
    setImageURL(reader.result)
  }
  return {
    getImage,
    imageURL
  }
}
