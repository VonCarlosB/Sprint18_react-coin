import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Favorites(){
    const favCoinsIDs = JSON.parse(localStorage.getItem('favCoins')) || []
    const [favCoins, setFavCoins] = useState([])

    const getCoin = async(coinID) => {
        const res = await fetch(`https://rest.coincap.io/v3/assets/${coinID}`, {
            headers:{Authorization:`Bearer ${import.meta.env.VITE_API_URL}`}
        })
        try {
            if(!res.ok) throw new Error('No se pudo obtener la criptomoneda con id '+id)
            const data = res.json()
            return data
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        Promise.all(favCoinsIDs.map(coin => getCoin(coin))).then((value) =>{
            const resultingCoins = value.map(coin => coin.data)
            resultingCoins.sort((a, b) => a.rank - b.rank)
            setFavCoins(resultingCoins)
        })
    },[])

    return(
        <>
        <ol className="coinList">
            {favCoins.map(coin => {
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