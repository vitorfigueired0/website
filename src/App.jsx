import { Header } from './components/Header'
import { MainText } from './components/MainText'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'

function App() {

  return (
    <div className='p-5 pb-1 md:px-20 h-screen'>
      <Header />
      <MainText />
      <div className='h-80'></div>
      <Projects />
      <div className='h-80'></div>
      <Skills />
      <div className='h-24'></div>
      <Footer />
    </div>
  )
}

export default App
