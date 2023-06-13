import { useEffect, useState } from 'react'
import axios from 'axios'
import { Navbar } from '../components/Navbar'
import { Navbar2 } from '../components/Navbar2'
import { Footer } from '../components/Footer'
import { ArrowCounterClockwise } from 'phosphor-react'

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
        <div className='flex flex-col'>
            <Navbar/>
            <Navbar2 url='Random Dog'/>
            <div className='flex justify-center items-center'>
                <img src={dog.message} alt="" />
            </div>
            <Footer/>
        </div>
    )
}