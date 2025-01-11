import './App.scss'
// import Success from './components/forms/success/Success'
// import Step1 from './components/forms/step-1/Step1'
// import Step2 from './components/forms/step-2/Step2'
// import Step3 from './components/forms/step-3/Step3'
import Step4 from './components/forms/step-4/Step4'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
  <main>
    <section className='left'>
      <Sidebar />
    </section>

    <section className='right'>
     <Step4 />
    </section>

  </main>
  )
}

export default App
