import InformationForm from "./InformationForm"

const Information = (props) => {
  return (
    <>
      <h3>I am information</h3>
      <InformationForm pet={props.pet} user={props.user}/>
      <table>
        <thead>
          <tr><th>Medication:</th></tr>
        </thead>
        <tbody>
          {props.pet.medications.map((medication) => 
            <tr key={medication.id}>
              <td>{medication.medication}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Information