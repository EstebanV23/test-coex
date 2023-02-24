import ButtonLink from './ButtonLink'
import Title from './Title'
import '../css/crear.css'
import Formulario from './Formulario'

export default function Crear () {
  return (
    <section className='section'>
      <Title> Nuevo Cliente </Title>
      <ButtonLink to='/clientes'>Atras</ButtonLink>
      <div className='contentCrear'>
        <div className='containerFormulario'>
          <h3>Datos Personales</h3>
          <Formulario />
        </div>
      </div>
    </section>
  )
}
