import AllergyForm from "./AllergyForm"
import MedicationForm from "./MedicationForm"
import VaccineForm from "./VaccineForm"

import { FaTrashAlt } from "react-icons/fa"

const Information = (props) => {
  return (
    <>
      <MedicationForm pet={props.pet} user={props.user}/>
      <div>
        {props.pet.medications.length ?
          <table>
            <thead>
              <tr>
                <th>Medication</th>
                <th>Dosage</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              {props.pet.medications.map((medication) => 
                <tr key={medication.id}>
                  <td>{medication.medication}</td>
                  <td>{medication.dosage}</td>
                  <td>{medication.frequency}</td>
                </tr>
              )}
            </tbody>
          </table>
        :
        <p>This pet has no medications</p>
        }
      </div>
      <VaccineForm pet={props.pet} user={props.user} />
      <div>
        {props.pet.vaccines.length ?
          <table>
            <thead>
              <tr><th>Vaccines:</th></tr>
            </thead>
            <tbody>
              {props.pet.vaccines.map((vaccine) => 
                <tr key={vaccine.id}>
                  <td>{vaccine.vaccine}</td>
                </tr>
              )}
            </tbody>
          </table>
        :
        <p>This pet has no vaccines</p>
        }
      </div>
      <AllergyForm pet={props.pet} user={props.user}/>
      <div>
        {props.pet.allergies.length ?
          <table>
            <thead>
              <tr><th>Allergies:</th></tr>
            </thead>
            <tbody>
              {props.pet.allergies.map((allergy) => 
                <tr key={allergy.id}>
                  <td>{allergy.allergy}</td>
                </tr>
              )}
            </tbody>
          </table>
        :
        <p>This pet has no allergies</p>
        }
      </div>
    </>
  )
}

export default Information