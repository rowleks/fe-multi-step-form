import './App.scss'
// import Step1 from './components/forms/step-1/Step1'
import Step2 from './components/forms/step-2/Step2'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
  <main>
    <section className='left'>
      <Sidebar />
    </section>

    <section className='right'>
      <Step2 />
    </section>

  </main>
  )
}

export default App
