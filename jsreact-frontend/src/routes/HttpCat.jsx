import { Footer } from '../src/components/Footer'
import { Navbar } from '../src/components/Navbar'
import { Navbar2 } from '../src/components/Navbar2'
import { Select } from '../src/components/Select'

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