import { useEffect, useState } from 'react'
import { getRandomImage } from '../services/getFact'

const CAT_PREFIX_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const firstThreeWords = fact.split(' ', 3).join(' ')
    getRandomImage(firstThreeWords).then(newImage => setImageUrl(newImage))
  }, [fact])
  return { imageUrl: imageUrl ? `${CAT_PREFIX_URL}${imageUrl}` : undefined }
}
