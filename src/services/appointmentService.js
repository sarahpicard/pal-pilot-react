import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/appointments/`


// create an appointment 
export const create = async (appointment) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST", 
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(appointment),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

// see all appointments 
export const getAll = async () => {
  try {
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


// get one appointment 
export const getOne = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`)
    return await res.json()
  } catch (error) {
    console.log(error)
    throw (error)
  }
}


// update an appointment 
export const update = async (appointment) => {
  try {
    const res = await fetch(`${BASE_URL}${appointment.id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(appointment)
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}


// delete an appointment 
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
    throw(error)
  }
}