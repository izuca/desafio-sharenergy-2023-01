import { useState, useEffect } from "react";
import { TextInput } from "./TextInput";
import { MagnifyingGlass } from 'phosphor-react'

export function Navbar2 (){
    return(
        <div className="flex bg-Verde-400 px-8 py-2 items-center justify-between">
            <h2 className="text-lg text-Branco">Random User Generator</h2>
            <div className="border-b-2 border-Branco flex items-center gap-1 ">
                <MagnifyingGlass size={24} className='text-Branco' />
                <input type="text" className="bg-transparent text-Branco w-72 placeholder:text-Branco outline-none" placeholder="Pesquisar por nome e-mail ou username" />
            </div>
                
           
        </div>
    )
}