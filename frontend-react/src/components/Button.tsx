import { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}

export function Button ({children, className, ...props}: ButtonProps) {
    return (
        <button className={clsx(
            'bg-Verde-900 px-24 py-3 text-Branco rounded-lg font-thin w-full transition-colors duration-200 hover:bg-Verde-400',
            className
            )}
            {...props}
            >
            {children}
        </button>
    )
}