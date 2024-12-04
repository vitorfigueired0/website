import { Header } from './components/Header'
import { MainText } from './components/MainText'
import { Skills } from './components/Skills'

function App() {

  return (
    <div className='p-5 md:px-20 h-screen'>
      <Header />
      <MainText />
      <Skills />
    </div>
  )
}

export default App
