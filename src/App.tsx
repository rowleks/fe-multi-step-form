import './App.scss'
import Nav from './components/nav/Nav'
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
      <div className='form'>
      <Step2 />
      </div>

      <Nav />
    </section>

  </main>
  )
}

export default App
