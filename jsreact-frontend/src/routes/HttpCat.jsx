import { Footer } from '../components/Footer.jsx'
import { Navbar } from '../components/Navbar.jsx'
import { Navbar2 } from '../components/Navbar2.jsx'
import { Select } from '../components/Select.jsx'

export function HttpCat (){
    return (
        <div className='flex flex-col items-center'>
            <Navbar/>
            <Navbar2 url='HTTPCat'/>
            <div className='w-1/3 py-9 flex flex-col justify-center items-center gap-8'>
                <Select/>
                
            </div>
            <Footer/>
        </div>
    )
}