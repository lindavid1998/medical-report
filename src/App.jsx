import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsFormSubmitted(true);

    const formData = {
      'name': e.target.elements.name.value,
      'age': e.target.elements.age.value,
      'gender': e.target.elements.gender.value,
      'psych-hx': e.target.elements['psych-hx'].value,
      'num-hosp': e.target.elements['num-hosp'].value,
      'num-sa': e.target.elements['num-sa'].value,
      'legal-hold': e.target.elements['legal-hold'].value,
      'substances': e.target.elements.substances.value,
      'per-hold': e.target.elements['per-hold'].value,
      'type-of-stressors': e.target.elements['type-of-stressors'].value,
      'stressors': e.target.elements.stressors.value,
      'psych-ros': e.target.elements['psych-ros'].value,
      'per-collateral': e.target.elements['per-collateral'].value,
      'current-meds': e.target.elements['current-meds'].value,
      'side-effects': e.target.elements['side-effects'].value,
      'med-history': e.target.elements['med-history'].value,
      'social-history': e.target.elements['social-history'].value,
      'substance-use': e.target.elements['substance-use'].value
    }

    setData(formData)
  }

  const resetForm = () => {
    setData({})
    setIsFormSubmitted(false)

  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' name='name' />

        <label htmlFor="age">Age</label>
        <input type="text" id='age' name='age'/>

        <label htmlFor="gender">gender</label>
        <input type="text" id='gender' name='gender'/>

        <label htmlFor="psych-hx">psych hx</label>
        <input type="text" id='psych-hx' name='psych-hx'/>

        <label htmlFor="num-hosp">number of hosp</label>
        <input type="text" id='num-hosp' name='num-hosp'/>

        <label htmlFor="num-sa">num of sa</label>
        <input type="text" id='num-sa' name='num-sa'/>

        <label htmlFor="legal-hold">legal hold</label>
        <input type="text" id='legal-hold' name='legal-hold'/>

        <label htmlFor="substances">substances</label>
        <input type="text" id='substances' name='substances'/>

        <label htmlFor="per-hold">per hold</label>
        <input type="text" id='per-hold' name='per-hold'/>

        <label htmlFor="type-of-stressors">Type of Stressors</label>
        <input type="text" id='type-of-stressors' name='type-of-stressors'/>

        <label htmlFor="stressors">Stressors</label>
        <input type="text" id='stressors' name='stressors'/>

        <label htmlFor="psych-ros">Psych ROS</label>
        <input type="text" id='psych-ros' name='psych-ros'/>

        <label htmlFor="per-collateral">Per Collateral</label>
        <input type="text" id='per-collateral' name='per-collateral'/>

        <label htmlFor="current-meds">Current Meds</label>
        <input type="text" id='current-meds' name='current-meds'/>

        <label htmlFor="side-effects">Side Effects</label>
        <input type="text" id='side-effects' name='side-effects'/>

        <label htmlFor="med-history">Med History</label>
        <input type="text" id='med-history' name='med-history'/>

        <label htmlFor="social-history">Social History</label>
        <input type="text" id='social-history' name='social-history'/>

        <label htmlFor="substance-use">Substance Use</label>
        <input type="text" id='substance-use' name='substance-use'/>

        <div className='buttons'>
          <button type='sumbit' className='submit-btn'>Submit</button>
          <button type='reset' onClick={resetForm}>Reset</button>
        </div>
        
      </form>

      { isFormSubmitted ? (
        <div className='report'>
          <p>{data.name} is a {data.age} y/o {data.gender} with past psych hx of {data['psych-hx']}, {data['num-hosp']} prior hospitalizations, {data['num-sa']} prior suicide attempts, who presents on a {data['legal-hold']} UDS {data.substances}</p>
          <p>Per hold: {data['per-hold']}</p>
          <p>On initial eval, patient reports recent {data['type-of-stressors']} stressors. {data['stressors']}. Psych ROS: {data['psych-ros']}</p>
          <p>Per collateral: {data['per-collateral']}</p>
          <p>Med hx: Patient is currently on {data['current-meds']}, reports {data['side-effects']}. Hx of being on {data['med-history']}. </p>
          <p>Social hx: {data['social-history']}</p>
          <p>Substance use: {data['substance-use']}</p>
        </div>
      ) : null}
    </>
  )
}

export default App
