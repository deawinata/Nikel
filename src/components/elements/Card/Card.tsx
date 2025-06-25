import {PropsWithChildren} from 'react'
import {twMerge} from 'tailwind-merge'

interface CardProps {
    className?: string
}

export default function Card(props: PropsWithChildren<CardProps>) {
    const {children, className} = props
    return (
        <div
            className={twMerge(
                'shadow rounded-lg overflow-hidden relative',
                className
            )}
        >
            {children}
        </div>
    )
}
