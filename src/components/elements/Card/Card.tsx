import {PropsWithChildren} from 'react'
import {twMerge} from 'tailwind-merge'

type TCardProps = {
  className?: string
}

const Card = ({className, children}: PropsWithChildren<TCardProps>) => {
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

export default Card
