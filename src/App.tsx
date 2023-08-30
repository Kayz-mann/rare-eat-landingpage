import './App.css'
import Header from '@/components/Header'
import FirstContactLayer from './components/FirstContactLayer'
import SecondContactLayer from './components/SecondContactLayer'
import Footer from './components/Footer'




function App() {

  return (
    <main>
      <Header />

      <div className='lg:p-16 md:p-0 sm:p-0  lg:items-center md:items-center sm:items-center'>
        <FirstContactLayer />
        <SecondContactLayer />
      </div>

      <Footer />
    </main>
  )
}

export default App
