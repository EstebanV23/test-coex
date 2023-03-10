import '../css/navbar.css'
import LinkIcon from './LinkIcon'

export default function NavBar () {
  return (
    <div className='containerNavbar'>
      <div className='navbarContentImage'>
        <img src='https://api.dicebear.com/5.x/adventurer/svg?seed=Midnight' className='navbarImg' />
        <p>Admin</p>
      </div>
      <div className='navbarLinks'>
        <LinkIcon href='/' symbol='house'>Inicio</LinkIcon>
        <LinkIcon href='/clientes' symbol='person'>Clientes</LinkIcon>
        <LinkIcon href='/creditos' symbol='database'>Creditos</LinkIcon>
      </div>
      <div className='containerButton'>
        <button className='navbarButton'>Cerrar Sesion</button>
      </div>
    </div>

  )
}
