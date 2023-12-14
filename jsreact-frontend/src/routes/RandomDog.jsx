import { useEffect, useState } from 'react'
import axios from 'axios'
import { Navbar } from '../src/components/Navbar'
import { Navbar2 } from '../src/components/Navbar2'
import { Footer } from '../src/components/Footer'
import { ArrowCounterClockwise } from 'phosphor-react'

const url:string = 'https://dog.ceo/api/breeds/image/random'


export function RandomDog (){
    const [dog, setDog]:any = useState([])

    useEffect(()=>{
        fetchRandomDogs()
    }, [])

    const fetchRandomDogs = async() => {
        axios.get(url)
        .then((response) => {
            setDog(response.data)
            console.log(JSON.stringify(response.data))
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleReloadClick = () => {
        fetchRandomDogs()
    }

    return (
        <div className='flex flex-col'>
            <Navbar/>
            <Navbar2 url='Random Dog'/>
            <div className='flex flex-col justify-center items-center' >
                <img src={dog.message} alt="" />
                <ArrowCounterClockwise weight='thin' size={64} className='text-Verde-900 hover:cursor-pointer' onClick={handleReloadClick}/>
            </div>
            <Footer/>
        </div>
    )
}