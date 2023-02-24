export default function InputGroup ({
  forInput,
  label,
  placeholder,
  onChange,
  value
}) {
  return (
    <div className='inputGroup'>
      <label htmlFor={forInput}>{label}</label>
      <input
        className='inputValues'
        type='text'
        id={forInput}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  )
}
