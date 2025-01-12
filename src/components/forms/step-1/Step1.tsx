import "./step1.scss";
import "../heading/Heading";
import Heading from "../heading/Heading";
import Nav from "../../nav/Nav";
import { useState } from "react";

interface Step1Props {
  nextStep?: () => void
}

function Step1({nextStep}: Step1Props) {

  const h2 = "Personal info";
  const p = "Please provide your name, email address and phone number";

  const [errors, setErrors] = useState({
    email: '',
    number: '',
    name: ''
  })

  const [formData, setFormData] = useState({
    username: '',
    useremail: '',
    number: ''
  })

  const handleNext = () => {
    if (nextStep) { nextStep()}
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }
  
  const handleError = () => {
    const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.(com|net|org|co|us)$/;
    const numberRegex = /^\d{3,}[-.\s]?\d{4}[-.\s]?\d{4}$/
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)?$/

    const validEmail = emailRegex.test(formData.useremail)
    const validNumber = numberRegex.test(formData.number)
    const validName = nameRegex.test(formData.username)

    if(!formData.useremail) 
    { 
      setErrors( prev =>({
      ...prev, ["email"]: 'This field is required'}))
    }
    else 
    {
      if (validEmail) 
        { 
          setErrors(prev => ({
            ...prev, ["email"]: ''
          }))
        }
      else 
      {
        { 
          setErrors(prev => ({
            ...prev, ["email"]: 'Please enter a valid email address'
          }))
        }
      }
    }

    if(!formData.number) 
      { 
        setErrors( prev =>({
        ...prev, ["number"]: 'This field is required'}))
      }
      else 
      {
        if (validNumber) 
          { 
            setErrors(prev => ({
              ...prev, ["number"]: ''
            }))
          }
        else 
        {
          { 
            setErrors(prev => ({
              ...prev, ["number"]: 'Please enter a valid phone number'
            }))
          }
        }
      }

    if(!formData.username) 
      { 
        setErrors( prev =>({
        ...prev, ["name"]: 'This field is required'}))
      }
      else 
      {
        if (validName) 
          { 
            setErrors(prev => ({
              ...prev, ["name"]: ''
            }))
          }
        else 
        {
          { 
            setErrors(prev => ({
              ...prev, ["name"]: 'Please enter your correct name'
            }))
          }
        }
      }

      if(validName && validEmail && validNumber) { handleNext() }

  }



  return (
    <div className="steps-container">
      <div className="form-container">
        <section className="step">
          <Heading heading={h2} text={p} />

          <form id="form" className="form1">
            <label htmlFor="user-name">
              <div>
                <span>Name</span>
                <span className={errors.name ? 'show' : ''}>{errors.name}</span>
              </div>
              <input 
              type="text" id="user-name" name="username" autoComplete="off" 
              placeholder="e.g. Stephen King"
              value={formData.username}
              onChange={handleChange}/>
            </label>

            <label htmlFor="user-mail">
              <div>
                <span>Email</span>
                <span className={errors.email ? 'show' : ''}>{errors.email}</span>
              </div>

              <input 
              type="email" id="user-mail" 
              name="useremail" autoComplete="new-password"
              placeholder="e.g. stephenking@lorem.com"
              value={formData.useremail}
              onChange={handleChange}/>
            </label>

            <label htmlFor="number">
              <div>
                <span>Phone Number</span>
                <span className={errors.number ? 'show' : ''}>{errors.number}</span>
              </div>
              <input 
              type="number" id="number" 
              name="number" autoComplete="new-password" 
              placeholder="e.g. +1 234 567 890"
              value={formData.number}
              onChange={handleChange}/>
            </label>
          </form>
        </section>
      </div>

      <div> <Nav first={true} next={handleError}/> </div>
    

      
    </div>
  )
}

export default Step1
