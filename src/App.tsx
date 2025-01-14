import { useState } from 'react'
import './App.scss'
import Success from './components/forms/success/Success'
import Step1 from './components/forms/step-1/Step1'
import Step2 from './components/forms/step-2/Step2'
import Step3 from './components/forms/step-3/Step3'
import Step4 from './components/forms/step-4/Step4'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  //Form states

  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    username: '', useremail: '', number: ''
  })
  const [plan, setPlan] = useState({name: '', value: '', checked: false})

  const [checkedAddOns, setCheckedAddOns] = useState({
    service: false,
    storage: false,
    profile: false
  })

  const [selectedAddOns, setSelectedAddOns] = useState<{ name: string, value: string }[]>([])

  const nextStep = () => {
    setStep(prev => prev + 1)
  }
  const prevStep = () => {
    setStep(prev => prev - 1)
  }
  const gotoStep = (step:number) => {
    setStep(step)
  }

  return (
    <>
    
  <main>
    <section className='left'>
      <Sidebar step={step} />
    </section>

    <section className='right'>
      { step === 1 &&  <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} />}

      { step === 2 &&  <Step2 nextStep={nextStep} prevStep={prevStep} plan={plan} setPlan={setPlan} />}

      { step === 3 &&  <Step3 nextStep={nextStep} prevStep={prevStep} checked={checkedAddOns} setChecked={setCheckedAddOns} setAddOns={setSelectedAddOns} plan={plan}/>}

      { step === 4 &&  <Step4 nextStep={nextStep} prevStep={prevStep} plan={plan} addOns={selectedAddOns} gotoStep={gotoStep} />}

      { step > 4 &&  <Success />}
  
    </section>


  </main>

  <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://rowland-momoh.netlify.app/" target="_blank">Rowland Momoh</a>.
    </div>
    </>
  )
}

export default App
