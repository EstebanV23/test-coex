import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CIUDADES } from '../logic/ciudades'
import { ESTADOS } from '../logic/ESTADOS'
import InputGroup from './InputGroup'
import SelectGroup from './SelectGroup'

export default function Formulario ({
  initialNombres = '',
  initialApellidos = '',
  initialCupoTotal = '',
  initialNit = '',
  initialDireccion = '',
  initialCupoDisponible = '',
  initialCiudad = '',
  initialTelefono = '',
  initialDiasGracia = '',
  initialEstado = 0,
  textBottom = 'Enviar',
  onSubmit
}) {
  const [nombres, setNombres] = useState(initialNombres)
  const [apellidos, setApellidos] = useState(initialApellidos)
  const [cupoTotal, setCupoTotal] = useState(initialCupoTotal)
  const [nit, setNit] = useState(initialNit)
  const [direccion, setDireccion] = useState(initialDireccion)
  const [cupoDisponible, setCupoDisponible] = useState(initialCupoDisponible)
  const [ciudad, setCiudad] = useState(initialCiudad)
  const [telefono, setTelefono] = useState(initialTelefono)
  const [diasGracia, setDiasGracia] = useState(initialDiasGracia)
  const [estadoCredito, setEstadoCredito] = useState(initialEstado)
  const [navigation, setNavigation] = useState(false)
  const navigate = useNavigate()

  const builData = () => {
    return {
      nombres,
      apellidos,
      cupoTotal,
      nit,
      direccion,
      cupoDisponible: Number(cupoDisponible) || Number(cupoTotal),
      ciudad,
      telefono,
      diasGracia,
      estadoCredito: Boolean(estadoCredito)
    }
  }

  const functionSubmit = async (e) => {
    e.preventDefault()
    const dataPerson = builData()
    await onSubmit(dataPerson, nit)
    setNavigation(true)
  }

  useEffect(() => {
    if (navigation) navigate('/clientes')
  }, [navigation])

  return (
    <form className='formCrear' onSubmit={functionSubmit}>
      <aside className='formAside'>
        <div className='rightGroup'>
          <InputGroup
            forInput='nombre'
            label='Nombres'
            placeholder='Brayan Esteban'
            value={nombres}
            onChange={setNombres}
          />
          <InputGroup
            forInput='apellido'
            label='Apellidos'
            placeholder='Villamizar Fernandez'
            value={apellidos}
            onChange={setApellidos}
          />
        </div>
        <div className='rightGroup'>
          <InputGroup
            forInput='nit'
            label='Nit/CC'
            placeholder='9138210'
            value={nit}
            onChange={setNit}
            disabled={Boolean(initialNit)}
          />
          <InputGroup
            forInput='direccion'
            label='Direccion'
            placeholder='Cra 6 #5 - 5'
            value={direccion}
            onChange={setDireccion}
          />
        </div>
        <div className='rightGroup'>
          <SelectGroup
            forInput='ciudad'
            label='Ciudad'
            value={ciudad}
            onChange={setCiudad}
            data={CIUDADES}
          />
          <InputGroup
            forInput='telefono'
            label='Telefono'
            placeholder='3153421442'
            value={telefono}
            onChange={setTelefono}
          />
        </div>
        <div className='rightGroup'>
          {initialNit &&
            <SelectGroup
              forInput='estado'
              label='Estado del Credito'
              value={estadoCredito ? 1 : 0}
              onChange={setEstadoCredito}
              data={ESTADOS}
              disabled
            />}
        </div>
        <button type='submit' className='buttonCreate buttonSubmit'>{textBottom}</button>
      </aside>
      <aside className='formAside leftBorder'>
        <InputGroup
          forInput='cupoTotal'
          label='Cupo Total'
          placeholder='$10000'
          value={cupoTotal}
          type='number'
          onChange={setCupoTotal}
        />
        <InputGroup
          forInput='cupoDisponible'
          label='Cupo Disponible'
          placeholder='$10000'
          value={initialNit ? cupoDisponible : cupoTotal}
          disabled
          type='number'
          onChange={setCupoDisponible}
        />
        <InputGroup
          forInput='diasGracia'
          label='Dias de gracia'
          placeholder='5'
          value={diasGracia}
          type='number'
          onChange={setDiasGracia}
        />
      </aside>
    </form>
  )
}
