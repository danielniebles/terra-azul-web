import { MENU } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { userAgent } from "next/server";
import { headers } from "next/headers";
import NavbarMobile from "./NavbarMobile";

export default async function Navbar() {
  const headerList = await headers()
  const { device } = userAgent({ headers: headerList });
  return (
    <header className="fixed top-0 left-0 w-full pb-2 shadow-xl bg-terra-sand h-24 z-10">
      <nav className="flex relative md:max-w-7xl flex-between md:mx-auto items-center h-[inherit] p-4">
        <Link href="/">
          <Image src="/logo-terra.svg" width={250} height={300} alt="Logo" />
        </Link>
        <ul className="hidden md:flex gap-4 items-end h-full">
          {MENU.map(({ name, link }) => (
            <li key={name}>
              <a className="text-forest-green" href={`#${link}`}>{name}</a>
            </li>
          ))}
        </ul>
        {device.type === "mobile" && <NavbarMobile />}
      </nav>
    </header>
  )
}