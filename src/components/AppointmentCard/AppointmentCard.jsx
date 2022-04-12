import styles from './AppointmentCard.module.css'

const AppointmentCard = (props) => {
  return (
    <>
      <div className={styles.whole}>
        <h3>Appointment Name: {props.appointment.name}</h3>
        <p>Description: {props.appointment.description}</p>
        <p>Address: {props.appointment.address}</p>
      </div>
    </>
  )
}

export default AppointmentCard