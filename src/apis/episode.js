import axios from 'axios'

const episodesInstance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/episode/',
})

episodesInstance.interceptors.request.use((config) => {
  // Je peux intéragir sur la config et empecher la requete de partir
  // si je ne renvoie pas la config
  return config
},
(error) => {
  return Promise.reject(error)
})


export async function getEpisode(id) {
  try {
    const { data } = await episodesInstance.get(`/${id}`)

    return data
  } catch (e) {
    if (e.response.status === 404) {
      throw new Error(`L'épisode' ${id} n'existe pas`)
    }
    throw new Error('Une erreur est survenue')
  }
}

export async function getAllEpisode() {
  try {
    const { data } = await episodesInstance.get('/')

    return data
  } catch (e) {
    throw new Error('Une erreur est survenue')
  }
}