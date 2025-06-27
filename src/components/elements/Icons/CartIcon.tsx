type Props = {
  className?: string
}

export default function CartIcon(props: Props) {
  const {className = ''} = props

  return (
    <svg
      className={className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2526_5125)">
        <path
          d="M6.11406 14H17.8844C18.2357 13.9999 18.5758 13.8766 18.8454 13.6515C19.1151 13.4264 19.2972 13.1137 19.36 12.7681L20.5 6.5H4.75"
          fill="currentColor"
        />
        <path
          d="M6.11406 14H17.8844C18.2357 13.9999 18.5758 13.8766 18.8454 13.6515C19.1151 13.4264 19.2972 13.1137 19.36 12.7681L20.5 6.5H4.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.125 17.75H8.04719C7.69591 17.7499 7.35579 17.6266 7.08612 17.4015C6.81646 17.1764 6.63435 16.8637 6.57156 16.5181L4.18 3.36594C4.1486 3.19313 4.05755 3.03681 3.92272 2.92425C3.78789 2.81169 3.61783 2.75003 3.44219 2.75H1.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.125 21.5C9.16053 21.5 10 20.6605 10 19.625C10 18.5895 9.16053 17.75 8.125 17.75C7.08947 17.75 6.25 18.5895 6.25 19.625C6.25 20.6605 7.08947 21.5 8.125 21.5Z"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.125 21.5C18.1605 21.5 19 20.6605 19 19.625C19 18.5895 18.1605 17.75 17.125 17.75C16.0895 17.75 15.25 18.5895 15.25 19.625C15.25 20.6605 16.0895 21.5 17.125 21.5Z"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2526_5125">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.25 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
