import { Link } from 'react-router-dom'

export default function ButtonLink ({ to, children }) {
  return (
    <Link to={to} className='buttonCreate'> {children}</Link>
  )
}
