import { useEffect, useState } from 'react'
import { BASE_URL } from '../logic/const'
import Title from './Title'
import '../css/incio.css'
import Loading from './Loading'

export default function Inicio () {
  const [loading, setLoading] = useState(true)
  const [dataInfo, setDataInfo] = useState(null)

  const icons = {
    persons: 'person',
    credits: 'credit_card'
  }

  const Card = ({ children, value, icon }) => {
    return (
      <div className='cardInfo'>
        <h3 className='cardInfoTitle'>{children}</h3>
        <p>{value}</p>
        <span className='material-symbols-outlined'>{icon}</span>
      </div>
    )
  }

  const createCards = (data) => {
    return Object.entries(data).map(([key, value]) => {
      return <Card key={key} icon={icons[key]} value={value}>Numero de {key}</Card>
    })
  }

  useEffect(() => {
    fetch(`${BASE_URL.dev}/info`)
      .then(response => response.json())
      .then(data => {
        const infoCards = createCards(data)
        setDataInfo(infoCards)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <section className='section'>
      <Title> Inicio </Title>
      <div className='contentCards'>
        {dataInfo}
      </div>
    </section>
  )
}
