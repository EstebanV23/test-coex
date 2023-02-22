import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [changeTitle, setChangeTitle] = useState('Inicio')
  const [dataPersons, setDataPersons] = useState(null)
  

  useEffect(() => {
    // if (changeTitle === 'Clientes') {
    //   fetch('http://localhost:5000/api/persons')
    //     .then(response => response.json())
    //     .then(data => setDataPersons(data))
    // }
    return () => {
      setDataPersons(null)
    }
  },[changeTitle])

  return (
    <main className='contentMain'>
      <aside className='aside'>
        <NavBar changeTitle={setChangeTitle} />
      </aside>
      <section>
        <h2 className='title'>{changeTitle}</h2>
        {dataPersons && <DataPerson data={dataPersons} />}
      </section>
    </main>
  )
}

export default App
