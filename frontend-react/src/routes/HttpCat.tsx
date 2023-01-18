import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Navbar2 } from '../components/Navbar2'
import { Select } from '../components/Select'

export function HttpCat (){
    return (
        <div className='flex flex-col items-center'>
            <Navbar/>
            <Navbar2 />
            <div className='w-1/3 py-9 flex flex-col justify-center items-center gap-8'>
                <Select/>
                <img src="https://http.cat/404" alt=""/>
            </div>
            <Footer/>
        </div>
    )
}