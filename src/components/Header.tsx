import { FC, useState, createRef } from 'react';
import Popper from 'popper.js';

type Props = {
  logOut(): void
}

const Header: FC<Props> = ({logOut}) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef: any = createRef();
  const popoverDropdownRef: any = createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start'
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <header className="flex justify-end items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
      <div>
        <button
          className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
          ref={btnDropdownRef}
          onClick={() => dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover()}
        >
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
            alt="Your avatar"
          />
        </button>
        <div
          ref={popoverDropdownRef}
          className={`absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10 ${dropdownPopoverShow ? "block" : "hidden"}`}
        >
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            onClick={() => logOut()}
          >
            Logout
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;
