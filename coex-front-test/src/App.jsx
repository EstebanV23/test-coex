import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Inicio from './components/Inicio'
import Clientes from './components/Clientes'
import Creditos from './components/Creditos'
import Edit from './components/Edit'
import Crear from './components/Crear'

function App () {
  return (
    <main className='contentMain'>
      <aside className='aside'>
        <NavBar />
      </aside>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/clientes' element={<Clientes />} />
        <Route path='/creditos' element={<Creditos />} />
        <Route path='/crear' element={<Crear />} />
        <Route path='/clientes/:nit' element={<Edit />} />
      </Routes>
    </main>
  )
}

export default App
