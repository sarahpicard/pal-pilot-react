import styles from './AppointmentCard.module.css'
import { FaTrashAlt } from 'react-icons/fa'

const AppointmentCard = (props) => {
  
  const handleDelete = () => {
    props.deleteAppointment(props.appointment.id)
  }

  return (
    <>
      <div className={styles.whole}>
        {console.log("appointment card id", props.appointment.id)}
        <h3>Appointment Name: {props.appointment.name}</h3>
        <p>Description: {props.appointment.description}</p>
        <p>Address: {props.appointment.address}</p>
        <div className={styles.trash}>
          <button onClick={handleDelete} className={styles.delete}>
            <FaTrashAlt size={20}/>
          </button>
        </div>
      </div>
    </>
  )
}

export default AppointmentCard