import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/pets/`

// create a new pet
export const create = async (pet) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(pet),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

// see all pets
export const getAll = async () => {
  try {
    const res = await fetch(`${BASE_URL}`)
    return await res.json()
  } catch (error) {
    console.log(error)
    throw(error)
  }
}

// get one pet 
export const getOne = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`)
    return await res.json()
  } catch (error) {
    console.log(error)
    throw (error)
  }
}