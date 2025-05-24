import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full pb-2 shadow-xl bg-terra-sand">
      <nav className="max-w-7xl flex-between mx-auto ">
        <Image src="/logo-terra.svg" width={100} height={200} alt="Logo" />
        <div>Menu</div>
      </nav>
    </header>
  )
}