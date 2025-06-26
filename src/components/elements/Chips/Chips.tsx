import { ChangeEvent, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export interface Item {
  label: string
  value: string
}

interface ChipsProps {
  listItem: Item[]
  onChange: (value: Item) => void
}

export default function Chips(props: ChipsProps) {
  const { listItem, onChange } = props
  const [value, setValue] = useState<Item>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked, name } = e.target
    if (checked) {
      setValue({ label: name, value })
    } else {
      setValue({ label: '', value: '' })
    }
  }

  useEffect(() => {
    if (value) {
      onChange(value)
    }
  }, [value])

  return (
    <div className="flex gap-2">
      {listItem?.map((item) => (
        <label
          htmlFor={item?.value}
          key={item?.value}
          className={twMerge(
            'flex items-center h-[40px] text-center border-1 border-gray px-[15px] text-primary rounded-full my-[6px] cursor-pointer',
            value?.value === item.value && 'border-primary bg-secondary font-semibold border-2'
          )}>
          <input
            id={item?.value}
            className="input-checkbox-select-filter hidden"
            type="checkbox"
            value={item.value}
            onChange={handleChange}
            checked={value?.value === item.value}
          />
          {item.label}
        </label>
      ))}
    </div>
  )
}
