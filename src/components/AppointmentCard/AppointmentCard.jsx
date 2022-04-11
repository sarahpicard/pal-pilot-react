const AppointmentCard = (props) => {
  return (
    <>
      <h3>Appointment Name: {props.appointment.name}</h3>
      <p>Description: {props.appointment.description}</p>
      <p>Address: {props.appointment.address}</p>
    </>
  )
}

export default AppointmentCard