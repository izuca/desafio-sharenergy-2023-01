import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Navbar2 } from '../components/Navbar2'
import { Table } from '../components/Table'

export function RandomUser(){
   
    
    return (
         
        <div className='flex flex-col'>
            <Navbar/>
            <Navbar2 />
            <Table/>
            
            <Footer/>
        </div>
    )
}