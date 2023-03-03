import React from 'react'
import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'other cats' })
  return (
    <>
      {imageUrl && <img src={imageUrl} alt='other Cats' />}
    </>
  )
}
