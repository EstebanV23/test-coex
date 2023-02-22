import '../css/navbar.css'
import LinkIcon from './LinkIcon'

export default function NavBar ({ changeTitle }) {
  return (
    <div className='containerNavbar'>
      <div className='navbarContentImage'>
        <img src="https://api.dicebear.com/5.x/adventurer/svg?seed=Midnight" className='navbarImg'/>
        <p>Admin</p>
      </div>
      <div className='navbarLinks'>
        <LinkIcon titleChange={changeTitle} symbol='house'>Inicio</LinkIcon>
        <LinkIcon titleChange={changeTitle} symbol='person'>Clientes</LinkIcon>
        <LinkIcon titleChange={changeTitle} symbol='database'>Creditos</LinkIcon>
      </div>
    </div>
    
  )
}
