import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <main className="relative h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* MOBILE */}
      <div className="flex items-center justify-between h-full md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="items-center justify-between h-full gap-8 bigger-screen">
        {/* LEFT */}
        <section className="flex items-center w-1/3 gap-12 left-section xl:w-1/2">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <div className="gap-4 nav-links xl:flex">
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </section>
        {/* RIGHT */}
        <section className="flex items-center justify-between w-2/3 gap-8 right-section xl:w-1/2">
          <SearchBar />
          <NavIcons />
        </section>
      </div>
    </main>
  );
};

export default Navbar;
