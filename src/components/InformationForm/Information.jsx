import AllergyForm from "./AllergyForm"
import MedicationForm from "./MedicationForm"
import VaccineForm from "./VaccineForm"

import styles from './Information.module.css'


const Information = (props) => {
  return (
    <div>
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
      <AllergyForm pet={props.pet} user={props.user}/>
      </div><br />
      <div>
        {props.pet.vaccines.length ?
          <table>
            <thead>
              <tr>
                <th>Vaccine</th>
                <th>Last Shot</th>
                <th>Next Shot Due</th>
              </tr>
            </thead>
            <tbody>
              {props.pet.vaccines.map((vaccine) => 
                <tr key={vaccine.id}>
                  <td>{vaccine.vaccine}</td>
                  <td>{vaccine.last_shot}</td>
                  <td>{vaccine.next_shot}</td>
                </tr>
              )}
            </tbody>
          </table>
        :
        <p>This pet has no vaccines</p>
      }
      <VaccineForm pet={props.pet} user={props.user} />
      </div>
      <div>
        {props.pet.medications.length ?
          <table className={styles.table}>
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
      <MedicationForm pet={props.pet} user={props.user}/>
      </div>
    </div>
  )
}

export default Information