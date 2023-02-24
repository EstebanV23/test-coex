import LinkIcon from './LinkIcon'

export default function ListPerson ({ nombres, apellidos, nit, direccion, ciudad, telefono, cupo, estado, remove }) {
  return (
    <tr className='listPerson'>
      <td>{nombres}</td>
      <td>{apellidos}</td>
      <td>{nit}</td>
      <td>{direccion}</td>
      <td>{ciudad}</td>
      <td>{telefono}</td>
      <td>{cupo}</td>
      <td>{estado ? 'Activo' : 'Inactivo'}</td>
      <td className='actions'>
        <LinkIcon href={`/clientes/${nit}`} symbol='edit' />
        <span className='material-symbols-outlined' onClick={() => remove(nit)}>delete</span>
      </td>
    </tr>
  )
}
