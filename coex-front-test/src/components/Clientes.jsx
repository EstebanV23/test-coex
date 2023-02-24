import { useEffect, useState } from 'react'
import { BASE_URL } from '../logic/const'
import ListPerson from './ListPerson'
import Title from './Title'
import '../css/clientes.css'
import ButtonLink from './ButtonLink'
import getPersons from '../logic/getPersons'
import InputGroup from './InputGroup'
import Loading from './Loading'
import Swal from 'sweetalert2'

export default function Clientes () {
  const swal = (msg, error) => {
    const icon = !error ? 'success' : 'error'
    const title = !error ? 'Todo bien' : 'Algo ha salido mal'
    Swal.fire({
      icon,
      text: msg,
      title
    })
  }
  const [loading, setLoading] = useState(true)
  const [persons, setPersons] = useState(null)
  const [search, setSearch] = useState('')
  const [action, setAction] = useState(0)

  const removePerson = (nit) => {
    fetch(`${BASE_URL.dev}/api/persons/${nit}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        swal(data.msg, data.error)
        if (!data.error) setAction(action + 1)
      })
  }

  const renderData = (data) => {
    const buildData = data.map(person => {
      return (
        <ListPerson
          key={person._id}
          nombres={person.nombres}
          apellidos={person.apellidos}
          nit={person.nit}
          direccion={person.direccion}
          ciudad={person.ciudad}
          telefono={person.telefono}
          cupo={person.cupoDisponible}
          estado={person.estadoCredito}
          remove={removePerson}
        />
      )
    })

    setPersons(buildData)
  }

  const TableClientes = () => {
    return (
      <table className='tableClients'>
        <thead className='theadClientes'>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Nit/CC</th>
            <th>Direccion</th>
            <th>Ciudad</th>
            <th>Telefono</th>
            <th>Cupo Disponible</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {persons}
        </tbody>
      </table>
    )
  }

  useEffect(() => {
    getPersons(search)
      .then(data => {
        setLoading(false)
        renderData(data)
      })
  }, [action, search])

  if (loading) {
    return <Loading />
  }
  return (
    <section className='section'>
      <Title> Clientes </Title>
      <div className='whiteBack'>
        <div className='sectionButtons'>
          <InputGroup
            placeholder='Nombres o Nit/CC'
            value={search}
            onChange={setSearch}
          />
          <ButtonLink to='/crear'>Crear nuevo cliente</ButtonLink>
        </div>
        {persons.length ? <TableClientes /> : <h2>No hay clientes</h2>}
      </div>
    </section>
  )
}
