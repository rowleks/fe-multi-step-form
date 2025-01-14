
import Heading from "../heading/Heading";
import "./step2.scss";
import Nav from "../../nav/Nav";
import { useState } from "react";

interface Step2Props {
  nextStep?: () => void
  prevStep?: () => void

  plan: {
    name: string
    value: string
    checked: boolean
  };

  setPlan: React.Dispatch<React.SetStateAction<{
    name: string
    value: string
    checked: boolean
  }>>;
}

function Step2( {nextStep, prevStep, plan, setPlan}:Step2Props) {



  const handlePlan = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setPlan(prev => ({...prev, name: id, value: value }))
    setError(false)
  }

  const handleCheckbox = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPlan(prev => ({...prev, name: '', value: '', checked:e.target.checked}))
  }

  const h2 = "Select your plan";
  const p = "You have the option of monthly or yearly billing.";

  const [error, setError]  = useState(false)

  const handleError = () => {
    if (!plan.name) {
      setError(true)
      return false
    } 
    return true
  }

  const handleNext = () => {
    if(nextStep) 
      {
        if (handleError()) { nextStep() }
      }
  }

  const handlePrev = () => {
    if(prevStep) { prevStep() }
  }

  return (
    <div className="steps-container">

    <div className="form-container">

    <section className="step">
      <Heading heading={h2} text={p} error={error}/>

      <form className="form2">

        <label htmlFor="arcade">
          <input 
          type="radio" 
          name="plan" id="arcade" value={ plan.checked ? 90 : 9 }
          checked={plan.name === 'arcade'}
          onChange={handlePlan}/>
            <img src="/icon-arcade.svg" alt="arcade" />
            <div>
              <h4>Arcade</h4>
              <small>{plan.checked ? '$90/yr' : '$9/mo'}</small>
              {plan.checked && <h5>2 months free</h5>}
            </div>
        </label>

        <label htmlFor="advanced">
          <input 
          type="radio" 
          name="plan" id="advanced" value={ plan.checked ? 120 : 12 }
          checked={plan.name ==='advanced'}
          onChange={handlePlan}/>
            <img src="/icon-advanced.svg" alt="arcade" />
            <div>
              <h4>Advanced</h4>
              <small>{plan.checked ? '$120/yr' : '$12/mo'}</small>
              {plan.checked && <h5>2 months free</h5>}
            </div>
        </label>

        <label htmlFor="pro">
          <input 
          type="radio" 
          name="plan" id="pro" value={ plan.checked ? 150 : 15 }
          checked={plan.name ==='pro'}
          onChange={handlePlan}/>
            <img src="/icon-pro.svg" alt="arcade" />
            <div>
              <h4>Pro</h4>
              <small>{plan.checked ? '$150/yr' : '$15/mo'}</small>
              {plan.checked && <h5>2 months free</h5>}
            </div>
        </label>

        <div className="toggle-div">
          <label className="switch" htmlFor="toggle">
            <input 
            type="checkbox" checked={plan.checked}
            name="switch" onChange={handleCheckbox}
            id="toggle" />
            <span className="slider"></span>
          </label>
          <span className="monthly">Monthly</span>
          <span className="yearly">Yearly</span>
        </div>

      </form>

    </section>
      </div>

    <div> <Nav next={handleNext} prev={handlePrev}/> </div>



    </div>
  )
}

export default Step2
