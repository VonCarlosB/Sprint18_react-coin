import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Home () {

  const [coins, setCoins] = useState([])

  const getCoins = async () => {
    const res = await fetch(`https://rest.coincap.io/v3/assets?apiKey=${import.meta.env.VITE_API_URL}`)

    try {
      if(!res.ok) throw new Error('No se ha podido acceder')
      const data = await res.json()
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
    <ol className="coinList">
    {coins.map(coin => {
      return (<li key={coin.id} >
      <Link to={`/coin/${coin.id}`}>
        <h3>{coin.name} {coin.name != coin.symbol ? `/ ${coin.symbol}` : ''}</h3>
      </Link>    
      </li>)
    })}
    </ol>
  </>
  )
}

export default Home