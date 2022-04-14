import AllergyForm from "./AllergyForm"
import MedicationForm from "./MedicationForm"
import VaccineForm from "./VaccineForm"

import styles from './Information.module.css'

import Moment from 'react-moment'


const Information = (props) => {
  return (
    <div className={styles.infodiv}>
      <div>
        {props.pet.vaccines.length ?
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.t}>Vaccine</th>
                <th className={styles.t}>Last Shot</th>
                <th className={styles.t}>Next Shot Due</th>
              </tr>
            </thead>
            <tbody>
              {props.pet.vaccines.map((vaccine) => 
                <tr key={vaccine.id}>
                  <td className={styles.t}>{vaccine.vaccine}</td>
                  <td className={styles.t}>
                    <Moment format="MM/DD/YYYY">
                      {vaccine.last_shot}
                    </Moment>
                  </td>
                  <td className={styles.t}>
                    <Moment format="MM/DD/YYYY">
                      {vaccine.next_shot}
                    </Moment>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        :
        <p className={styles.no}>This pet has no vaccines 😿</p>
      }
      <VaccineForm pet={props.pet} user={props.user} />
      </div>
      <div>
        {props.pet.medications.length ?
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.t}>Medication</th>
                <th className={styles.t}>Dosage</th>
                <th className={styles.t}>Frequency</th>
              </tr>
            </thead>
            <tbody>
              {props.pet.medications.map((medication) => 
                <tr key={medication.id}>
                  <td className={styles.t}>{medication.medication}</td>
                  <td className={styles.t}>{medication.dosage}</td>
                  <td className={styles.t}>{medication.frequency}</td>
                </tr>
              )}
            </tbody>
          </table>
        :
        <p className={styles.no}>This pet has no medications 💊</p>
      }
      <MedicationForm pet={props.pet} user={props.user}/>
      <div className={styles.allergy}>
        <AllergyForm pet={props.pet} user={props.user}/>
        {props.pet.allergies.length ?
          <table className={styles.allergytable}>
            <thead>
              <tr><th>All Allergies:</th></tr>
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
        <p className={styles.no}>This pet has no allergies 🤧</p>
      }
      </div>
      </div>
    </div>
  )
}

export default Information