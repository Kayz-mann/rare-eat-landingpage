import './App.css'
import Header from '@/components/Header'
import FirstContactLayer from './components/FirstContactLayer'
import SecondContactLayer from './components/SecondContactLayer'
import Footer from './components/Footer'




function App() {

  return (
    <main>
      <Header />

      <div className='px-16 items-center'>
        <FirstContactLayer />
        <SecondContactLayer />
      </div>
      
      <Footer />
    </main>
  )
}

export default App
