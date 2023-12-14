import {Slot} from '@radix-ui/react-slot'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

export interface TextProps {
    children: ReactNode;
    asChild?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export function Text({size = 'md', children, asChild, className}) {
    const Comp = asChild ? Slot : 'span'

    return (
        <Comp className={clsx(
            'text-Verde-900 font-sans',
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg',
            },
            className
        )}>
            {children}
        </Comp>
    )
}


