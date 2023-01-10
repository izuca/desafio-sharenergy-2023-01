import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Navbar2 } from '../components/Navbar2'


export function HttpCat (){
    return (
        <div className='flex flex-col'>
            <Navbar/>
            <Navbar2 />
            
            <Footer/>
        </div>
    )
}