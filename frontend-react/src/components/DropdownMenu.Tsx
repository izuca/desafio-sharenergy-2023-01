import { ReactNode } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { List } from 'phosphor-react'
import React from 'react'



export function DropdownMenu(){
    return(

        <DropdownMenuPrimitive.Root >
            <DropdownMenuPrimitive.Trigger >
                <button>
                    <List size={36} className='text-Branco' />
                </button>
            </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal className=' bg-Verde-900'>
            <DropdownMenuPrimitive.Content className='flex flex-col gap-2  bg-Verde-900'>
                <DropdownMenuPrimitive.Item asChild >
                    <a href="/RandomUser" className='font-light text-Branco  text-md hover:outline-none  bg-Verde-900'>Random User Generator</a>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item asChild >
                    <a href="/HttpCat" className='font-light text-Branco text-md hover:outline-none' >HTTP Cat</a>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item asChild >
                    <a href="/RandomDogs" className='font-light text-Branco text-md hover:outline-none'>Random Dog</a>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item asChild className='bg-Verde-900' >
                    <a href="/Clientes" className='font-light text-Branco text-md hover:border-none ' >Clientes</a>
                </DropdownMenuPrimitive.Item>
            </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
        </DropdownMenuPrimitive.Root>
    )
}





