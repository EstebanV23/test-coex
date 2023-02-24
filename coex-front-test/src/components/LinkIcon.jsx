import { Link } from 'react-router-dom'
export default function LinkIcon ({ symbol, children, href }) {
  return (
    <Link to={href} className='iconLink'><span className='material-symbols-outlined'>{symbol}</span>{children}</Link>
  )
}
