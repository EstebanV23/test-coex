import createCredit from '../logic/createCredit'
import ButtonLink from './ButtonLink'
import FormularioCredit from './FormularioCredit'
import Title from './Title'

export default function Creditos () {
  return (
    <section className='section'>
      <Title> Creditos </Title>
      <ButtonLink to='/clientes'>Atras</ButtonLink>
      <div className='contentCrear'>
        <div className='containerFormulario'>
          <h3>Datos Del Credito</h3>
          <FormularioCredit
            textBottom='Crear Cliente'
            onSubmit={createCredit}
          />
        </div>
      </div>
    </section>
  )
}
