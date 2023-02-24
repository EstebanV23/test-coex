import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../logic/const'
import ListPerson from './ListPerson'
import Title from './Title'
import '../css/clientes.css'
import ButtonLink from './ButtonLink'

export default function Clientes () {
  const [loading, setLoading] = useState(true)
  const [persons, setPersons] = useState(null)
  const [action, setAction] = useState(0)

  const removePerson = (nit) => {
    fetch(`${BASE_URL.dev}/api/persons/${nit}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
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
    fetch(`${BASE_URL.dev}/api/persons`)
      .then(response => response.json())
      .then(data => {
        renderData(data)
        setLoading(false)
      })
  }, [action])

  if (loading) {
    return <h1 className='loading'>Cargando...</h1>
  }
  return (
    <section className='section'>
      <Title> Clientes </Title>
      <div className='whiteBack'>
        <ButtonLink to='/crear'>Crear nuevo cliente</ButtonLink>
        {persons.length ? <TableClientes /> : <h2>No hay clientes</h2>}
      </div>
    </section>
  )
}
