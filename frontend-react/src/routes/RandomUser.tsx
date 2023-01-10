
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Table } from '../components/Table'



export function RandomUser(){
   
    
    return (
         
        <div className='flex flex-col'>
            <Navbar/>
            <Table/>
            
            <Footer/>
        </div>
    )
}