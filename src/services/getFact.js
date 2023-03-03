const FACT_CAT_ENDPOINT = 'https://catfact.ninja/fact'

export async function getRandomFact () {
  const res = await fetch(FACT_CAT_ENDPOINT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export async function getRandomImage (firstWord) {
  const res = await fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
  const json = await res.json()
  const newImage = json.url
  return newImage
}
