import PetCard from '../../components/PetCard/PetCard'

import styles from './MyPets.module.css'

const MyPets = (props) => {

  return (
    <div>
          <section className={styles.section}>
            {props.pets.map((pet) => {
              return pet.profile_id === props.user.id ?
              <PetCard pet={pet} key={pet.id} images={props.images} />
              :
              <p className={styles.empty}>You don't have any pets yet!</p>
            })}
          </section>
    </div>
  )
}

export default MyPets