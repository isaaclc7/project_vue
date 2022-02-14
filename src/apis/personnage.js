import axios from 'axios'

const personnagesInstance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character/',
})

personnagesInstance.interceptors.request.use((config) => {
  // Je peux intéragir sur la config et empecher la requete de partir
  // si je ne renvoie pas la config
  return config
},
(error) => {
  return Promise.reject(error)
})


export async function getPersonnage(id) {
  try {
    const { data } = await personnagesInstance.get(`/${id}`)

    return data
  } catch (e) {
    if (e.response.status === 404) {
      throw new Error(`Le personnage ${id} n'existe pas`)
    }
    throw new Error('Une erreur est survenue')
  }
}

export async function getAllPersonnage() {
  try {
    const { data } = await personnagesInstance.get('/')

    return data
  } catch (e) {
    throw new Error('Une erreur est survenue')
  }
}




