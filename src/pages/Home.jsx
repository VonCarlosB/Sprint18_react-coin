import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Home () {

  const [coins, setCoins] = useState([])

  const getCoins = async () => {
    const res = await fetch(`https://rest.coincap.io/v3/assets?apiKey=${import.meta.env.VITE_API_URL}`)

    try {
      if(!res.ok) throw new Error('No se ha podido acceder')
      const data = await res.json()
    console.log(data.data)
      setCoins(data.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCoins()
  }, [])

  return (
  <>
    <ol>
    {coins.map(coin => {
      return (<li key={coin.id} >
      <Link to={`/coin/${coin.id}`}>
        <h3>{coin.name}</h3>
        <p>USD: {coin.priceUsd}$</p>
      </Link>    
      </li>)
    })}
    </ol>
  </>
  )
}

export default Home