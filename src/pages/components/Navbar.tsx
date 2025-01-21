import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";

interface NavProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Nav: React.FC<NavProps> = ({ searchQuery, setSearchQuery }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkUser, setCheckUser] = useState<string | undefined>("");
  
  const router = useRouter();
  useEffect(() => {
    const user = getCookie("user") as string | undefined;
    setCheckUser(user);
    
  }, []);

  const handleLogout = () => {
    deleteCookie("user");
    setCheckUser(undefined);
    router.push('/');
    console.log("User logged out");
  };

  return (
    <section className="revert">
      <nav className="bg-white">
        {/* Top Bar */}
        <div className="flex items-center bg-gray-100 py-3 px-6">
          {/* Logo Section */}
          <div className="w-6 h-6 text-black">
            <Image
              src="/nike1.png"
              alt="Nike Logo"
              style={{ marginLeft: "37px" }}
              width={19.2}
              height={18}
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex gap-4 ml-auto text-black text-xs font-medium">
            <Link href={"/"}>Find a Store</Link>
            <span>|</span>
            <Link href={"/contact"}>Help</Link>
            <span>|</span>
            {!checkUser ? (
              <div>
                <Link href={"/joinus"}>Join Us</Link>
                <span>|</span>
                <Link href={"/login"}>Sign in</Link>
              </div>
            ) : (
              <button onClick={handleLogout} className="text-blue-500 hover:underline">
                Logout
              </button>
            )}
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div
            className="flex items-center justify-center"
            style={{
              marginLeft: "38px",
              marginTop: "-44px",
              width: "78px",
              height: "78px",
            }}
          >
            <Image
              src="/nike2.png"
              alt="Nike Logo"
              style={{ marginLeft: "10px", marginTop: "28px" }}
              width={59}
              height={21}
            />
          </div>

          {/* Burger Menu */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Desktop Links */}
          <div
            className={`hidden sm:flex items-center gap-8 text-black transition-all ${
              menuOpen ? "hidden" : "block"
            }`}
            style={{
              fontSize: "15px",
              fontWeight: 500,
              lineHeight: "24px",
              marginLeft: "340px",
            }}
          >
            <Link className="text-nowrap" href={"/"}>
              New & Featured
            </Link>
            <Link href={"/"}>Men</Link>
            <Link href={"/"}>Women</Link>
            <Link className="text-nowrap" href={"/Product"}>
              Latest Products
            </Link>
            <Link href={"/Product"}>Sale</Link>
            <Link className="text-nowrap" href={"/wishList"}>
              Wish List
            </Link>
          </div>

          {/* Search Bar */}
          <div
            className="hidden sm:flex items-center bg-gray-100 rounded-md ml-28"
            style={{ width: "192px", height: "44px" }}
          >
            <Image
              src="/search.png"
              alt="Search Icon"
              style={{ marginLeft: "4px", marginTop: "4px" }}
              width={17}
              height={17}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="mx-2 w-full bg-transparent outline-none text-gray-700"
            />
          </div>

          {/* Wishlist & Cart Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
            <button onClick={() => (window.location.href = "/cart")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0L5 21m2-8l2.4 2H18a1 1 0 001-.8L21 5H5.4z"
                />
                <circle cx="7" cy="20" r="2" />
                <circle cx="17" cy="20" r="2" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col items-center gap-4 bg-gray-100 py-4">
            <Link href={"/"}>New & Featured</Link>
            <Link href={"/"}>Men</Link>
            <Link href={"/"}>Women</Link>
            <Link href={"/"}>Kids</Link>
            <Link href={"/Product"}>Sale</Link>
            <Link href={"/"}>SNKRS</Link>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-10/12 px-4 py-2 bg-white rounded-md border outline-none text-gray-700"
            />
          </div>
        )}
      </nav>
    </section>
  );
};

export default Nav;
