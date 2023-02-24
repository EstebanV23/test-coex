export default function InputGroup ({
  forInput,
  label,
  placeholder,
  onChange,
  value,
  type = 'text',
  disabled = false,
  required = true,
  autoComplete = 'off'
}) {
  return (
    <div className='inputGroup'>
      <label htmlFor={forInput}>{label}</label>
      <input
        type={type}
        className='inputValues'
        id={forInput}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        disabled={disabled}
        required={required}
        autoComplete={autoComplete}
      />
    </div>
  )
}
