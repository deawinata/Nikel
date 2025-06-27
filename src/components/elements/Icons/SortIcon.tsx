type Props = {
  className?: string,
}

export default function SortIcon(props: Props) {
  const {className} = props
  return (
    <svg className={className} viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.0834 45.1389L69.1667 45.1393" stroke="currentColor" strokeWidth="8.5" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M15.0834 74.6389H49.5" stroke="currentColor" strokeWidth="8.5" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M15.0834 15.6389H93.75" stroke="currentColor" strokeWidth="8.5" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path
        d="M91.2917 104.139V45.1389M91.2917 104.139C87.8491 104.139 81.4166 94.3336 79.0001 91.8472M91.2917 104.139C94.7344 104.139 101.167 94.3336 103.583 91.8472"
        stroke="currentColor" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}