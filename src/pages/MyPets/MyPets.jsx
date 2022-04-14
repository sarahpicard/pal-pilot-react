import PetCard from '../../components/PetCard/PetCard'

import styles from './MyPets.module.css'

const MyPets = (props, i) => {
  // console.log("id",props.user.id)
  // console.log("type user id", typeof(props.user.id))
  // console.log("pet prof id", props.pets.profile_id)
  // console.log("type of pet id", typeof(props.pets[0].profile_id))
  const userId = props.user.id

  return (
    <div>
      {/* {props.user.id === props.pets?.profile_id ?  */}
          <section className={styles.section}>
            {props.pets.map((pet) => {
              return pet.profile_id === props.user.id ?
              <PetCard pet={pet} key={pet.id} images={props.images} />
              :
              <p className={styles.empty}>You don't have any pets yet!</p>
            })}
          </section>
         {/* <section className={styles.section}>
           {props.pets.map((pet) => (
              <PetCard pet={pet} key={pet.id} images={props.images} />
          ))}
        </section> */}
         {/* :
         <h1>You don't have any pets yet! 🙀</h1>
       } */}
      {/* <section>
        {props.pets.map((pet) => {
          return pet.profile_id
        })}
      </section> */}
    </div>
  )
}

export default MyPets