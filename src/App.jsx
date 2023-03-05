import React from 'react'
import { useCatfact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

export default function App () {
  const { fact, refreshCatFact } = useCatfact()
  const { imageUrl } = useCatImage({ fact })
  console.log(imageUrl)
  const handleclick = async () => {
    refreshCatFact()
  }
  return (
    <main>
      <h1>Cat Facts</h1>
      <button className='bn5' onClick={handleclick}> Change Fact</button>
      <section>

        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt='cats' />}
      </section>

    </main>
  )
}
