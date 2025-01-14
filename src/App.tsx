import { useState } from 'react'
import './App.scss'
// import Success from './components/forms/success/Success'
import Step1 from './components/forms/step-1/Step1'
import Step2 from './components/forms/step-2/Step2'
import Step3 from './components/forms/step-3/Step3'
import Step4 from './components/forms/step-4/Step4'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    username: '', useremail: '', number: ''
  })
  const [plan, setPlan] = useState({name: '', value: '', checked: false})


  const nextStep = () => {
    setStep(prev => prev + 1)
  }
  const prevStep = () => {
    setStep(prev => prev - 1)
  }

  return (
  <main>
    <section className='left'>
      <Sidebar step={step} />
    </section>

    <section className='right'>
      { step === 1 &&  <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} />}
      { step === 2 &&  <Step2 nextStep={nextStep} prevStep={prevStep} plan={plan} setPlan={setPlan} />}
      { step === 3 &&  <Step3 nextStep={nextStep} prevStep={prevStep}/>}
      { step >= 4 &&  <Step4 nextStep={nextStep} prevStep={prevStep} />}
    </section>

  </main>
  )
}

export default App
