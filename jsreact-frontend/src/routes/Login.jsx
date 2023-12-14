import { Button } from '../src/components/Button'
import { Checkbox } from '../src/components/Checkbox'
import { TextInput } from '../src/components/TextInput'
import { Text } from '../src/components/Text'
import { User } from 'phosphor-react'
import { Lock } from 'phosphor-react'
import { SunDim } from 'phosphor-react'

export function Login (){
    

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <header className='flex flex-col items-center gap-2'>
                <SunDim size={201} className='text-Verde-900'/>
                <h1 className='text-Verde-900 text-4xl font-medium'>Sharenergy Challenge</h1>
                <Text size='lg'>Faça o login e comece a usar!</Text>
            </header>
            
            <form action="" className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-5'>
                <label htmlFor="User">
                    <TextInput.Root>
                        <TextInput.Icon className='text-Verde-900'>
                            <User />
                        </TextInput.Icon>
                        <TextInput.Input id='email' placeholder='Usuário'/>
                    </TextInput.Root>
                </label>

                <label htmlFor="password">
                    <TextInput.Root>
                        <TextInput.Icon className='text-Verde-900'>
                            <Lock />
                        </TextInput.Icon>
                        <TextInput.Input id='password' type='password' placeholder='Senha'/>
                    </TextInput.Root>
                </label>
                
                <label htmlFor="remember" className='flex items-center gap-2'>
                    <Checkbox id='remember' />
                    <Text size='lg' className='font-light ' asChild>
                        <p>Lembrar de mim</p>
                    </Text>
                </label>
                <Button type='submit' className='mt-8'>Entrar na Plataforma</Button>
            </form>
        </div>
    )
}