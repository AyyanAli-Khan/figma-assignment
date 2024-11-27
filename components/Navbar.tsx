"use client"
import { useState } from "react";
export default function Navbar() {
  const menu: string[] = ['Work', 'Blog', 'Contact'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full h-30 p-5 md:pt-[66px] bg-[#FAF5F5] md:pr-[69px]">
      <div className="flex items-center justify-end px-5 md:px-0">
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden block ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-[2px] bg-black mb-1"></div>
          <div className="w-6 h-[2px] bg-black mb-1"></div>
          <div className="w-6 h-[2px] bg-black"></div>
        </button>

        {/* Menu */}
        <div className="hidden md:flex items-center justify-end w-full">
          <ul className="flex gap-[50px]">
            {menu.map((item: string, index: number) => (
              <li key={index} className="font-[500] text-[20px]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className="md:hidden absolute bg-[#FAF5F5] right-0 top-[100px] w-full shadow-lg py-5 px-5">
          {menu.map((item: string, index: number) => (
            <li key={index} className="font-[500] text-[20px] py-2">
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
