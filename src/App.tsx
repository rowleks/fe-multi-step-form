import './App.scss'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
  <main>
    <section className='left'>
      <Sidebar />
    </section>

    <section className='right'>Right</section>
  </main>
  )
}

export default App
