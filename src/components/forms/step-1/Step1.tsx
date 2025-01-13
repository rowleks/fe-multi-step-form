import "./step1.scss";
import "../heading/Heading";
import Heading from "../heading/Heading";
import Nav from "../../nav/Nav";
import { useState } from "react";

interface Step1Props {
  nextStep?: () => void;

  formData: {
    username: string
    useremail: string
    number: string
  };

  setFormData: React.Dispatch<React.SetStateAction<{
    username: string
    useremail: string
    number: string
  }>>;
}

interface PatternsType {
  email: RegExp
  number: RegExp
  name: RegExp
}

function Step1({nextStep, formData, setFormData}: Step1Props) {

  const h2 = "Personal info";
  const p = "Please provide your name, email address and phone number";

  const patterns:PatternsType = {
    email: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.(com|net|org|co|us)$/,
    number: /^\d{3,}[-.\s]?\d{4}[-.\s]?\d{4}$/,
    name: /^[A-Za-z]+(?: [A-Za-z]+)?$/
  }


  const [errors, setErrors] = useState({
    email: '',
    number: '',
    name: ''
  })



  const handleNext = () => {
    if (nextStep) { if (handleError()) { nextStep() }  }
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]: value}))

    const validEmail = patterns.email.test(formData.useremail)
    const validNumber = patterns.number.test(formData.number)
    const validName = patterns.name.test(formData.username)

    if (validEmail) 
      { 
        setErrors(prev => ({
          ...prev, ["email"]: ''
        }))
      }

    if (validName) 
      { 
        setErrors(prev => ({
          ...prev, ["name"]: ''
        }))
      }

    if (validNumber) 
      { 
        setErrors(prev => ({
          ...prev, ["number"]: ''
        }))
      }
  }
  
    const handleError = () => {
    const validEmail = patterns.email.test(formData.useremail)
    const validNumber = patterns.number.test(formData.number)
    const validName = patterns.name.test(formData.username)

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

      if(validName && validEmail && validNumber) { return true }
      return false;

  }



  return (
    <div className="steps-container">
      <div className="form-container">
        <section className="step">
          <Heading heading={h2} text={p} />

          <form id="form" className="form1">
            <label htmlFor="user-name">
              <div className="field">
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
              <div className="field">
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
              <div className="field">
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

      <div> <Nav first={true} next={handleNext}/> </div>
    

      
    </div>
  )
}

export default Step1
