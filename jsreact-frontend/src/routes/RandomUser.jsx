import { Footer } from '../src/components/Footer'
import { Navbar } from '../src/components/Navbar'
import { Navbar2 } from '../src/components/Navbar2'
import { Table } from '../src/components/Table'

export function RandomUser(){
   
    
    return (
         
        <div className='flex flex-col'>
            <Navbar/>
            <Navbar2 url='Random User' hasInput/>
            <Table/>
            
            <Footer/>
        </div>
    )
}