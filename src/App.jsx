import './App.css'
import BarraDePesquisa from './components/BarraDePesquisa'
import Cards from './components/Card'
import Filtro from './components/Filtro'
import Ordenacao from './components/Ordenacao'
import Sidebar from './components/sidebar'

function App() {
  return (
    <div className='container'> 
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <Cards />
      </div>
    </div>
  )
}

export default App
