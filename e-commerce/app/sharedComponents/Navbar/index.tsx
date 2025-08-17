"use client"; 
import SearchBar from "../SearchBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/signup", label: "Signup" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md md:px-20">
      <span className="font-bold text-3xl text-black cursor-pointer">Exclusive</span>

      <ul className="flex space-x-15 text-lg text-black">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                className={`hover:underline ${isActive ? "underline" : ""}`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      <SearchBar />
    </nav>
  );
};

export default NavBar;
