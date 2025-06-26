import {twMerge} from "tailwind-merge";
import ChevronLeftIcon from "@/components/elements/Icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/elements/Icons/ChevronRightIcon";

export type IconsName =
  'chevron-left' |
  'chevron-right'

type Props = {
  name: IconsName
  className?: string
}

export default function Icons(props: Props) {
  const {name, className} = props

  const classNames = twMerge(className, 'shrink-0 grow-0')

  switch(name) {
    case 'chevron-left':
      return <ChevronLeftIcon className={classNames} />
    case 'chevron-right':
      return <ChevronRightIcon className={classNames} />
    default:
      throw new Error('Invalid icon name')
  }
}