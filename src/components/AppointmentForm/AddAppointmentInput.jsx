import styles from './AddAppointmentInput.module.css'

const AddAppointmentInput = (props) => {
  return (
    <>
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
          type="text" 
          placeholder="appointment description"
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
    </>
  )
}

export default AddAppointmentInput