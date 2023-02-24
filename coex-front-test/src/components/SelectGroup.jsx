import { useEffect, useState } from 'react'

export default function SelectGroup ({
  forInput,
  label,
  onChange,
  value,
  data,
  disabled = false,
  required = true,
  defaultText = 'Seleccionar Ciudad...'
}) {
  const [optionsRender, setOptionsRender] = useState([])

  const buildData = () => {
    const buildOptions = data.map(({ key, nombre, val }) => {
      return (
        <option key={key} value={val} selected={val === value}>{nombre}</option>
      )
    })

    if (value === '') buildOptions.unshift(<option key={-1} value=''>{defaultText}</option>)

    setOptionsRender(buildOptions)
  }

  useEffect(() => {
    buildData()
  }, [])

  return (
    <div className='inputGroup'>
      <label htmlFor={forInput}>{label}</label>
      <select
        disabled={disabled}
        className='inputValues'
        id={forInput}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      >
        {optionsRender}
      </select>
    </div>
  )
}
