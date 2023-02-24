import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputGroup from './InputGroup'
import SelectGroup from './SelectGroup'
import Loading from './Loading'
import onePerson from '../logic/onePerson'
import getPersons from '../logic/getPersons'

export default function FormularioCredit ({
  onSubmit,
  textBottom = 'Crear'
}) {
  const [pagare, setPagare] = useState('')
  const [monto, setMonto] = useState('')
  const [personNit, setPersonNit] = useState('')
  const [fechaCredito, setFechaCredito] = useState('')
  const [cuotasMensuales, setCuotasMensuales] = useState('')
  const [cuotaInicial, setCuotaInicial] = useState('')
  const [tasaInteres, setTasaInteres] = useState('')
  const [fechaDesembolso, setFechaDesembolso] = useState('')
  const [observaciones, setObservaciones] = useState('')
  const [persons, setPersons] = useState([])
  const [navigation, setNavigation] = useState(false)
  const [loading, setLoading] = useState(true)
  const [select, setSelect] = useState(null)
  const navigate = useNavigate()

  const builData = () => {
    const namePerson = persons.filter(item => item.nit === personNit).map(element => element.nombres).join()
    return {
      pagare,
      monto,
      personNit,
      personNombre: namePerson,
      fechaCredito,
      cuotasMensuales,
      cuotaInicial,
      tasaInteres,
      fechaDesembolso,
      observaciones
    }
  }
  const functionSubmit = async (e) => {
    e.preventDefault()
    const dataCredit = builData()
    await onSubmit(dataCredit)
    setNavigation(true)
  }

  const getPersonsSelect = async (nit) => {
    const personsSelected = await getPersons(nit)
    setPersons(personsSelected)
    const newPersons = personsSelected.map(item => {
      return {
        key: item._id,
        val: item.nit,
        nombre: item.nombres
      }
    })
    return newPersons
  }

  useEffect(() => {
    getPersonsSelect(personNit)
      .then(data => {
        setLoading(false)
        setSelect(data)
      })
    return () => {
      setLoading(true)
    }
  }, [personNit])

  useEffect(() => {
    if (navigation) navigate('/clientes')
  }, [navigation])

  return (
    <form className='formCrear' onSubmit={functionSubmit}>
      <aside className='formAside'>
        <InputGroup
          forInput='pagare'
          label='Nro Pagare'
          placeholder='12313FA'
          value={pagare}
          onChange={setPagare}
        />
        <InputGroup
          forInput='monto'
          label='Monto'
          placeholder='312331'
          value={monto}
          onChange={setMonto}
        />
        <InputGroup
          forInput='personaNit'
          label='Buscar Cliente por Nit'
          placeholder='9138210'
          value={personNit}
          onChange={setPersonNit}
        />
        {loading
          ? <Loading />
          : <SelectGroup
              forInput='personaNombre'
              label='Nombre del Cliente'
              value={personNit}
              onChange={setPersonNit}
              data={select}
              defaultText='Seleccione el nombre del cliente'
            />}
        <InputGroup
          forInput='fechaCedito'
          label='Fecha del Credito'
          placeholder='21/08/2022'
          type='date'
          value={fechaCredito}
          onChange={setFechaCredito}
        />
        <InputGroup
          forInput='fechaDesembolso'
          label='Fecha de desembolso'
          placeholder='21/08/2022'
          type='date'
          value={fechaDesembolso}
          onChange={setFechaDesembolso}
        />
        <button type='submit' className='buttonCreate buttonSubmit'>{textBottom}</button>
      </aside>
      <aside className='formAside leftBorder'>
        <InputGroup
          forInput='cuotasMensuales'
          label='Cuotas Mensuales'
          placeholder='5'
          value={cuotasMensuales}
          type='number'
          onChange={setCuotasMensuales}
        />
        <InputGroup
          forInput='cuotaInicial'
          label='Cuota Inicial'
          placeholder='$10000'
          value={cuotaInicial}
          type='number'
          onChange={setCuotaInicial}
        />
        <InputGroup
          forInput='tasaInteres'
          label='Tasa de Interes'
          placeholder='1.4'
          value={tasaInteres}
          type='number'
          onChange={setTasaInteres}
        />
        <div className='inputGroup'>
          <label htmlFor='observaciones'>Observaciones</label>
          <textarea className='inputValues' onChange={(e) => setObservaciones(e.target.value)} id='observaciones' cols='30' rows='10' value={observaciones} />
        </div>
      </aside>
    </form>
  )
}
