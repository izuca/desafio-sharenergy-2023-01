import { DropdownMenu } from './DropdownMenu'
import {SunDim} from 'phosphor-react'
import {UserCircle} from 'phosphor-react'
import react from 'react'

export function Navbar (){
    return (
        <nav className='bg-Verde-900 w-full w-max-screen py-2 flex items-center justify-between px-8'>
            <div className='flex items-center gap-2'>
                <DropdownMenu />
                <span className='text-Branco text-xl '>Sharenergy Challenge</span>
            </div>

            <SunDim size={68} weight='thin' className='text-Branco -translate-x-8'/>

            <div className='flex items-center gap-2'>
                
                <span className='text-Branco text-xl'>Olá, user</span>
                <UserCircle weight='thin' size={52} className='text-Branco' />
            </div>


        </nav>
    )
}