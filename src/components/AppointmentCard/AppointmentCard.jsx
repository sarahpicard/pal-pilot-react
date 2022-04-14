import styles from './AppointmentCard.module.css'
import { FaTrashAlt } from 'react-icons/fa'

import Moment from 'react-moment'

const AppointmentCard = (props) => {
  
  const handleDelete = () => {
    props.deleteAppointment(props.appointment.id)
  }

  return (
    <>
      <div className={styles.whole}>
        <h3>Appointment Name: {props.appointment.name}</h3>
        <p>Date:  
          <Moment format="MM/DD/YYYY">
            {props.appointment.description}
          </Moment>
        </p>
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