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
    console.log("base_url",BASE_URL)
    const res = await fetch(`${BASE_URL}`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
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


// update a pet
export const update = async (pet) => {
  try {
    const res = await fetch(`${BASE_URL}${pet.id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(pet)
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}


// delete a pet
export const deleteOne = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}