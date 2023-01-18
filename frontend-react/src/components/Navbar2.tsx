import { useState, useEffect } from "react";
import { TextInput } from "./TextInput";
import { MagnifyingGlass } from 'phosphor-react'
// colocar props com o nome do site e se vai ter barra de pesquisa ou botão

export function Navbar2 (){
    

    return(
        <div className="flex bg-Verde-400 px-8 py-3 w-full items-center justify-between">
            <h2 className="text-lg text-Branco">Random User Generator</h2>
            <div className="border-b-2 border-Branco flex items-center gap-1 ">
                <MagnifyingGlass size={24} className='text-Branco' />
                <input type="text" className="bg-transparent text-Branco w-72 placeholder:text-Branco outline-none" placeholder="Pesquisar por nome e-mail ou username" />
            </div>
            
           
        </div>
    )
}