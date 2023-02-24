import { useState } from 'react'
import InputGroup from './InputGroup'

export default function Formulario ({
  initialNombres = '',
  initialApellidos = '',
  initialCupoTotal = '',
  initialNit = '',
  initialDireccion = '',
  initialCupoDisponible = '',
  initialCiudad = '',
  initialTelefono = '',
  initialDiasGracias = '',
  initialEstado = ''
}) {
  const [nombres, setNombres] = useState(initialNombres)
  const [apellidos, setApellidos] = useState(initialApellidos)
  const [cupoTotal, setCupoTotal] = useState(initialCupoTotal)
  const [nit, setNit] = useState(initialNit)
  const [direccion, setDireccion] = useState(initialDireccion)
  const [cupoDisponible, setCupoDisponible] = useState(initialCupoDisponible)
  const [ciudad, setCiudad] = useState(initialCiudad)
  const [telefono, setTelefono] = useState(initialTelefono)
  const [diasGracias, setDiasGracias] = useState(initialDiasGracias)
  const [estado, setEstado] = useState(initialEstado)

  console.log({ nombres })

  return (
    <form className='formCrear'>
      <InputGroup
        forInput='nombre'
        label='Nombres'
        placeholder='Brayan Esteban'
        value={nombres}
        onChange={setNombres}
      />
    </form>
  )
}
