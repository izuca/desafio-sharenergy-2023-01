import { Button } from '../components/Button'
import { Checkbox } from '../components/Checkbox'
import { TextInput } from '../components/TextInput'
import {User} from 'phosphor-react'
import {Lock} from 'phosphor-react'
import { Text } from '../components/Text'

export function Login (){
    

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <header>

            </header>
            
            <form action="" className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>
                <label htmlFor="User">
                    <TextInput.Root>
                        <TextInput.Icon>
                            <User />
                        </TextInput.Icon>
                        <TextInput.Input placeholder='Usuário'/>
                    </TextInput.Root>
                </label>

                <label htmlFor="password">
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>
                        <TextInput.Input type='password' placeholder='Senha'/>
                    </TextInput.Root>
                </label>
                
                <label htmlFor="remember" className='flex items-center gap-2'>
                    <Checkbox/>
                    <Text size='lg' className='font-light ' asChild>
                        <p>Lembrar de mim</p>
                    </Text>
                </label>
                <Button>Entrar na Plataforma</Button>
            </form>
        </div>
    )
}