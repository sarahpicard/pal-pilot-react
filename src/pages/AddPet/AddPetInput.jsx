import styles from './AddPetInput.module.css'

const AddPetInput = (props) => {
  return (
    <>
        <label htmlFor="name">Name:
          <input 
            type="text"  
            placeholder='pet name'
            autoComplete='off'
            value={props.form.name ? props.form.name : ''}
            onChange={props.handleChange}
            id="name"
            name="name"
            className={styles.input}
          />
        </label>
        <label htmlFor="breed">Breed:
          <input 
            type="text" 
            placeholder='pet breed'
            autoComplete='off'
            value={props.form.breed ? props.form.breed : ''}
            onChange={props.handleChange}
            id="breed"
            name="breed"
            className={styles.input}
            />
        </label>
        <label htmlFor="animal_type">Animal Type:
          <input 
            type="text" 
            placeholder='animal type'
            autoComplete='off'
            value={props.form.animal_type ? props.form.animal_type : ''}
            onChange={props.handleChange}
            id="animal_type"
            name="animal_type"
            className={styles.input}
            />
        </label>
        <label htmlFor="age">Pet Age:
          <input 
            type="text" 
            placeholder='pet age'
            autoComplete='off'
            value={props.form.age ? props.form.age : ''}
            onChange={props.handleChange}
            id="age"
            name="age"
            className={styles.input}
            />
        </label>
        <label htmlFor="weight">Weight:
          <input 
            type="text" 
            placeholder='pet weight'
            autoComplete='off'
            value={props.form.weight ? props.form.weight : ''}
            onChange={props.handleChange}
            id="weight"
            name="weight"
            className={styles.input}
            />
        </label>
        {/* <label htmlFor="medications">Medication:
          <input 
            type="text" 
            placeholder='medication'
            autoComplete='off'
            value={props.form.medication ? props.form.medication : ''}
            onChange={props.handleChange}
            id="medication"
            name="medication"
            className={styles.input}
            />
        </label>
        <label htmlFor="vaccines">Vaccine:
          <input 
            type="text" 
            placeholder='vaccine'
            autoComplete='off'
            value={props.form.vaccine ? props.form.vaccine : ''}
            onChange={props.handleChange}
            id="vaccine"
            name="vaccine"
            className={styles.input}
            />
        </label>
        <label htmlFor="allergies">Allergy:
          <input 
            type="text" 
            placeholder='allergy'
            autoComplete='off'
            value={props.form.allergy ? props.form.allergy : ''}
            onChange={props.handleChange}
            id="allergy"
            name="allergy"
            className={styles.input}
            />
        </label> */}
    </>
  )
}

export default AddPetInput