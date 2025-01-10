import './App.scss'
import Footer from './components/footer/Footer'
import Step1 from './components/forms/step-1/Step1'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
  <main>
    <section className='left'>
      <Sidebar />
    </section>

    <section className='right'>
      <div className='form'>
      <Step1 />
      </div>
      
    <Footer />
    </section>

  </main>
  )
}

export default App
