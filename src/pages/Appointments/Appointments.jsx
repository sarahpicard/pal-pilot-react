import AddAppointmentForm from '../../components/AppointmentForm/AddAppointmentForm'
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard'

import styles from './Appointments.module.css'

const Appointments = (props) => {
  return (
    <div className={styles.whole}>
      <div className={styles.appForm}>
        <AddAppointmentForm addAppointment={props.addAppointment} />
      </div>
      <section className={styles.appSection}>
        {props.appointments.map((appointment) => (
          <AppointmentCard 
            appointment={appointment} 
            key={appointment.id} 
            deleteAppointment={props.deleteAppointment}
          />
        ))}
      </section>
    </div>
  )
}

export default Appointments