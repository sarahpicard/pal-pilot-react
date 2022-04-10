import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/pets/`

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