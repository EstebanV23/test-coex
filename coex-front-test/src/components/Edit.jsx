import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import editPerson from '../logic/editPerson'
import getPersons from '../logic/getPersons'
import onePerson from '../logic/onePerson'
import ButtonLink from './ButtonLink'
import Formulario from './Formulario'
import InputGroup from './InputGroup'
import Loading from './Loading'
import Title from './Title'

export default function Edit () {
  const { nit } = useParams()
  const [person, setPerson] = useState({})
  const [loading, setLoading] = useState(true)

  const getPerson = async () => {
    const personSelect = await onePerson(nit)
    setPerson(personSelect)
    setLoading(false)
  }

  useEffect(() => {
    getPerson()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <section className='section'>
      <Title> Nuevo Cliente </Title>
      <ButtonLink to='/clientes'>Atras</ButtonLink>
      <div className='contentCrear'>
        <div className='containerFormulario'>
          <h3>Datos Personales</h3>
          <Formulario
            textBottom='Guardar Cambios'
            onSubmit={editPerson}
            initialApellidos={person.apellidos}
            initialNombres={person.nombres}
            initialCiudad={person.ciudad}
            initialCupoDisponible={person.cupoDisponible}
            initialCupoTotal={person.cupoTotal}
            initialDiasGracia={person.diasGracia}
            initialDireccion={person.direccion}
            initialEstado={person.estadoCredito}
            initialNit={person.nit}
            initialTelefono={person.telefono ?? ''}
          />
        </div>
      </div>
    </section>
  )
}
