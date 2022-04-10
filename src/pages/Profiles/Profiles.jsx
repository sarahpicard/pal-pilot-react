import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.length ? 
        <>
          {profiles.map(profile=>
            <div key={profile._id}>
              <img style={{'width': '200px'}} src={profile.photo} alt="profile" />
              <p>{profile.name}</p>
            </div>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}
 
export default Profiles