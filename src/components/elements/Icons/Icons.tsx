import {twMerge} from "tailwind-merge";
import ChevronLeftIcon from "@/components/elements/Icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/elements/Icons/ChevronRightIcon";
import CartIcon from "@/components/elements/Icons/CartIcon";
import FilterIcon from "@/components/elements/Icons/FilterIcon";
import SortIcon from "@/components/elements/Icons/SortIcon";
import TrashIcon from "@/components/elements/Icons/TrashIcon";

export type IconsName =
  'chevron-left' |
  'chevron-right' |
  'cart' |
  'filter' |
  'sort' |
  'trash'

type Props = {
  name: IconsName
  className?: string
}

const Icons = ({name, className}: Props) => {
  const classNames = twMerge(className, 'shrink-0 grow-0')

  switch (name) {
    case 'chevron-left':
      return <ChevronLeftIcon className={classNames}/>
    case 'chevron-right':
      return <ChevronRightIcon className={classNames}/>
    case 'cart':
      return <CartIcon className={classNames}/>
    case 'filter':
      return <FilterIcon className={classNames}/>
    case 'sort':
      return <SortIcon className={classNames}/>
    case 'trash':
      return <TrashIcon className={classNames}/>
    default:
      throw new Error('Invalid icon name')
  }
}

export default Icons;