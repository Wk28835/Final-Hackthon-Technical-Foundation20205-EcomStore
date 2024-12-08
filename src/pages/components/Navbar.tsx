
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const Nav: React.FC = () => {

  




 
  return (
    <section>
      <nav>

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
  <div className="flex gap-4 ml-auto text-black text-xs font-medium">
    <Link href={"/"}>Find a Store</Link>
    <span>|</span>
    <Link href={"/"}>Help</Link>
    <span>|</span>
    <Link href={"/"}>Join Us</Link>
    <span>|</span>
    <Link href={"/"}>Sign in</Link>
  </div>

</div>

        <div className="flex mt-9 bg-white items-center">

{/* Logo */}
<div
  className="flex items-center justify-center"
  style={{ marginLeft: "38px", marginTop: "-44px", width: "78px", height: "78px" }}
>
  <Image
    src="/nike2.png"
    alt="Nike Logo"
    style={{ marginLeft: "10px", marginTop: "28px" }}
    width={59}
    height={21}
  />
</div>

{/* Navigation Links */}
<div
  className="flex items-center gap-8 text-black"
  style={{
    fontSize: "15px",
    fontWeight: 500,
    lineHeight: "24px",
    marginLeft: "340px",
  }}
>
  <Link href={"/"}>New & Featured</Link>
  <Link href={"/"}>Men</Link>
  <Link href={"/"}>Women</Link>
  <Link href={"/"}>Kids</Link>
  <Link href={"/Product"}>Sale</Link>
  <Link href={"/"}>SNKRS</Link>
</div>

{/* Search Bar */}
<div
  className="flex items-center bg-gray-100 rounded-md ml-28"
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
    placeholder="Search..."
    className="mx-2 w-full bg-transparent outline-none text-gray-700"
  />
</div>

{/* Wishlist Button */}
<button className="mx-2 my-3">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-700"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
</button>

{/* Cart Button */}
<button className="mx-2 my-3">
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


      </nav>
      
    </section>
    
  );
};

export default Nav;
