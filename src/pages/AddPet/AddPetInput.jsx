
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
            />
        </label>
    </>
  )
}

export default AddPetInput