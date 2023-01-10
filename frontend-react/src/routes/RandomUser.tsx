import axios from 'axios'
import { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'

const url:string = 'https://randomuser.me/api/?results=20'
interface User {
    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    },
    city: string,
}

export function RandomUser(){
    const [users, setUsers]:any = useState<User[]>([])

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setUsers(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    },[])
    
    return (
         
        <div>
            <Navbar/>
            <ul>
                {users.map( (user:User) => {
                    return (
                        <li key={user.name.first}>
                            <strong>{user.name.title} {user.name.first} {user.name.last}</strong>
                        </li>
                    )
                })}
            
            </ul>
        </div>
    )
}