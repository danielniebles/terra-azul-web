'use client'
import Image from "next/image";
import { Button } from "./ui/button";
import { MENU } from "@/app/constants";
import { useState } from "react";


export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ul className={`flex absolute top-0 left-0 w-full bg-terra-sand transition-transform duration-500 ease-in-out
      flex-col items-center gap-4 h-auto p-4 ${isOpen ? 'transform -translate-y-0' : 'transform -translate-y-full'}`}>
        <>
          {MENU.map(({ name, link }) => (
            <li key={name}>
              <a className="text-forest-green" href={`#${link}`}>{name}</a>
            </li>
          ))}
          <Button variant="ghost" className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
            <Image src="/close.svg" width={20} height={20} alt="Logo" />
          </Button>
        </>
      </ul>
      <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
        <Image src="/menu.svg" width={40} height={40} alt="Logo" />
      </Button>

    </>

  );
}