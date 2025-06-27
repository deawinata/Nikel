import Icons from '@/components/elements/Icons'
import {useIsMobile} from '@/hooks/useIsMobile'

type TPagination = {
  page: number
  limit: number
  total?: number
  onPageChanged: (page: number) => void
  className?: string
}

const Pagination = (
  {
    page,
    limit,
    total = 0,
    onPageChanged,
    className,
  }: TPagination) => {
  const totalPages = Math.ceil(total / limit)
  const maxPagingDisplayed = 3
  const isMobile = useIsMobile()

  let end = page + Math.ceil(maxPagingDisplayed / 2) || 1
  if (end >= totalPages) {
    end = totalPages
  }

  let start = end - maxPagingDisplayed || 1
  if (start < 1) {
    start = 1
  }

  if (end - start < maxPagingDisplayed) {
    end = start + maxPagingDisplayed
    if (end >= totalPages) {
      end = totalPages
    }
  }

  const scrollToElement = () => {
    if (!document.querySelector('#catalog')) return
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleClick = (params: number) => {
    onPageChanged(params)
    scrollToElement()
  }

  return (
    <div className={`flex items-center justify-center py-5 ${className}`}>
      <div className="flex items-center space-x-3.5 text-sm">
        <div
          role="presentation"
          className="flex items-center justify-center w-10 h-10 cursor-pointer xl:w-8 xl:h-8 xl:text-xs"
          onClick={() => handleClick(Math.max(page - 1, 1))}>
          <Icons name="chevron-left"/>
        </div>

        {[
          ...Array(end - start + 1)
            .fill('')
            .map((e, idx) =>
              isMobile ? (
                <div
                  key={idx}
                  role="presentation"
                  className={`${
                    page === start + idx ? 'border-b border-sky-900 ' : ''
                  } w-full h-10 md:flex lg:flex items-center justify-center hover:border-sky-900 cursor-pointer grid place-items-center`}
                  onClick={() => handleClick(start + idx)}>
                  {start + idx}
                </div>
              ) : (
                <div
                  key={idx}
                  role="presentation"
                  className={`${
                    page === start + idx ? 'border-b border-sky-900 ' : ''
                  } w-10 h-10 xl:w-8 xl:h-8 xl:text-xs hidden md:flex lg:flex items-center justify-center hover:border-b hover:border-red-400 cursor-pointer`}
                  onClick={() => handleClick(start + idx)}>
                  {start + idx}
                </div>
              )
            ),
        ]}

        <div
          className="flex items-center justify-center w-10 h-10 cursor-pointer xl:w-8 xl:h-8 xl:text-xs group"
          role="presentation"
          onClick={() => handleClick(Math.min(page + 1, totalPages))}>
          <Icons name="chevron-right"/>
        </div>
      </div>
    </div>
  )
}

export default Pagination
