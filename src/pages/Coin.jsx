import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Coin() {
    const { id } = useParams()
    const [coin, setCoin] = useState(null)
    
    const getCoin = async () => {
        const res = await fetch(`https://rest.coincap.io/v3/assets/${id}`, {
            headers:{Authorization:`Bearer ${import.meta.env.VITE_API_URL}`}
        })
        try {
            if(!res.ok) throw new Error('No se pudo obtener la criptomoneda con id '+id)
            const data = res.json()
            data.then((value) => {
                setCoin(value.data)
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCoin()
    }, [])

    const roundNumber = (num) => {
        const number = parseFloat(num)
        return Math.round((number + Number.EPSILON) * 100) / 100
    }

    return(
        <>
            {coin && <>
                <h2>Name: {coin.name} / {coin.symbol}</h2>
                <h3>Rank: {coin.rank}</h3>
                <h3>Price: {roundNumber(coin.priceUsd)}$</h3>
                <div className="extraInfo">
                    <p>Supply: {roundNumber(coin.supply)}</p>
                    <p>Max Supply: {roundNumber(coin.maxSupply)}</p>
                    <p>Market Cap USD: {roundNumber(coin.marketCapUsd)}</p>
                    <p>Volume USD last 24h: {roundNumber(coin.volumeUsd24Hr)}</p>
                </div>
            </>
            }
        </>
        
    )
}