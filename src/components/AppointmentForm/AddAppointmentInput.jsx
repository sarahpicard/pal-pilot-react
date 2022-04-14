import styles from './AddAppointmentInput.module.css'

const AddAppointmentInput = (props) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="name">
        <input 
          type="text" 
          placeholder="name of appointment"
          autoComplete="off"
          value={props.form.name ? props.form.name : ''}
          onChange={props.handleChange}
          id="name"
          name="name"
          className={styles.input}
        />
      </label>
      <label htmlFor="description">
        <input 
          type="date" 
          placeholder="appointment date"
          autoComplete="off"
          value={props.form.description ? props.form.description : ''}
          onChange={props.handleChange}
          id="description"
          name="description"
          className={styles.input}
        />
      </label>
      <label htmlFor="address">
        <input 
          type="text" 
          placeholder="appointment address"
          autoComplete="off"
          value={props.form.address ? props.form.address : ''}
          onChange={props.handleChange}
          id="address"
          name="address"
          className={styles.input}
        />
      </label>
    </div>
  )
}

export default AddAppointmentInput