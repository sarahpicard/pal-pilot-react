import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getOne } from '../../services/petService'

const Pet = (props) => {
  const { id } = useParams()
  const [pet, setPet] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setPet(data.pet)
    }
    fetchOne()
  }, [id])

  if (!pet) return <h1>Loading</h1>

  return (
    <>
      <h1>I'm one pet</h1>
    </>
  )
}

export default Pet