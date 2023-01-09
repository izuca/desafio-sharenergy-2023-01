import {useEffect, useState} from 'react'
import axios from 'axios'


const url:string = 'https://dog.ceo/api/breeds/image/random'


export function RandomDog (){
    const [dog, setDog]:any = useState([])

    useEffect(()=>{
        axios.get(url)
        .then((response) => {
            setDog(response.data)
            console.log(JSON.stringify(response.data))
        })
        .catch((error) => {
            console.log(error)
        })

    }, [])


    return (
        <img src={dog.message} alt="" />
    )
}