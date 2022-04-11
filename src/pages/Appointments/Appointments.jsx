import { useState } from 'react'

import AddAppointmentForm from '../../components/AppointmentForm/AddAppointmentForm'
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard'

const Appointments = (props) => {
  return (
    <>
      <h1>this is the appointments page</h1>
      <AddAppointmentForm addAppointment={props.addAppointment} />
      <section>
        {props.appointments.map((appointment) => (
          <AppointmentCard appointment={appointment} key={appointment.id}/>
        ))}
      </section>
    </>
  )
}

export default Appointments