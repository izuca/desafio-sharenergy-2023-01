import { Check } from 'phosphor-react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps{}

export function Checkbox(props:CheckboxProps){
    return(
        <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-Branco outline-Verde-900 rounded outline outline-2' {...props}>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='light' className='h-5 w-5 text-Verde-900'/>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}