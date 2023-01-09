import {ReactNode, InputHTMLAttributes} from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
    children: ReactNode
}

function TextInputRoot(props:TextInputRootProps){
    return(
        <div className='outline ountline-2 outline-Verde-900 rounded rounded-2 flex gap-4 py-3 px-4 transition duration-200 hover:-translate-y-1'>
            {props.children}
        </div>
    )
}
TextInputRoot.displayName = 'TextInput.Root'


export interface TextInputIconProps{
    children: ReactNode
}

function TextInputIcon(props:TextInputIconProps){
    return(
        <Slot className='w-6 h-6 text-Verde-900'>
            {props.children}
        </Slot>
    )
}
TextInputIcon.displayName = 'TextInput.Icon'


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputInput (props: TextInputInputProps){
    return (
        <input className='text-Verde-900 font-light bg-transparent flex-1 outline-none text-md placeholder:text-Verde-900 ' {...props} />
    )
}
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Icon: TextInputIcon,
    Input: TextInputInput
}




