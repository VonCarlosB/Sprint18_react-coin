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
            setCoin(data)
            console.log(coin)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCoin()
    }, [])


    return(
        <>
        
        </>
    )
}