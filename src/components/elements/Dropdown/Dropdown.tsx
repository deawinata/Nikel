import {
  Menu,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import {Button, Icons} from '@/components/elements';
import {IconsName} from '@/components/elements/Icons/Icons';
import {Item} from "@/types/commonTypes";

type DropdownProps = {
  iconName: IconsName;
  buttonClass?: string;
  iconClass?: string;
  isOpen: boolean;
  onClickAction: () => void;
  items: Item[]
  onClickItemAction: (item: Item) => void;
}

const Dropdown = (
  {
    iconName,
    buttonClass,
    iconClass,
    isOpen,
    onClickAction,
    items,
    onClickItemAction
  }: DropdownProps) => {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        <Button variant="outlined" className={buttonClass} onClick={onClickAction}>
          <Icons name={iconName} className={iconClass}/>
        </Button>

        {isOpen && (
          <MenuItems
            static
            className="absolute right-0 mt-2 w-52 origin-top-right rounded-xl bg-white text-black shadow-lg ring-1 ring-black/5 focus:outline-none z-50 max-h-[400px] overflow-y-auto"
          >
            <div className="px-1 py-1">
              {items && items.length > 0 && items.map((item, index) => (
                <MenuItem key={item.value + index}>
                  {({focus}) => (
                    <Button
                      className={`${
                        focus ? 'bg-gray-100' : ''
                      } group flex w-full items-start rounded-md px-3 py-2 text-xs`}
                      onClick={() => onClickItemAction(item)}
                    >
                      {item.label}
                    </Button>
                  )}
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        )}
      </Menu>
    </div>
  );
}

export default Dropdown;
