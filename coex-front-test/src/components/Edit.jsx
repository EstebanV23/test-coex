import { useParams } from 'react-router-dom'

export default function Edit () {
  const { nit } = useParams()
  return (
    <h1>{nit}</h1>
  )
}
