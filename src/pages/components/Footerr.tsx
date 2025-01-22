import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white w-full">
      {/* Main Container */}
      <div className="max-w-screen-xl mx-auto px-4 py-10 md:py-14">
        {/* First Section */}
        <div className="flex flex-wrap justify-between gap-8 md:gap-16">
          {/* Find a Store Section */}
          <div>
            <ul className="space-y-4">
              <li className="text-sm font-semibold">FIND A STORE</li>
              <li className="text-sm">BECOME A MEMBER</li>
              <li className="text-sm">SIGN UP FOR EMAIL</li>
              <li className="text-sm">STUDENT DISCOUNTS</li>
            </ul>
          </div>

          {/* Get Help Section */}
          <div>
            <ul className="space-y-4">
              <li className="text-sm font-semibold">GET HELP</li>
              <li className="text-sm text-gray-500">Order Status</li>
              <li className="text-sm text-gray-500">Delivery</li>
              <li className="text-sm text-gray-500">Returns</li>
              <li className="text-sm text-gray-500">Payment Options</li>
              <li className="text-sm text-gray-500">Contact Us On Nike.com inquiries</li>
              <li className="text-sm text-gray-500">Contact Us On All Other inquiries</li>
            </ul>
          </div>

          {/* About Nike Section */}
          <div>
            <ul className="space-y-4">
              <li className="text-sm font-semibold">ABOUT NIKE</li>
              <li className="text-sm text-gray-500">News</li>
              <li className="text-sm text-gray-500">Careers</li>
              <li className="text-sm text-gray-500">Investors</li>
              <li className="text-sm text-gray-500">Sustainability</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex items-center space-x-4">
            <button className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="w-4 h-4"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </button>

            <button className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="w-4 h-4"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.505 0-1.796.715-1.796 1.764v2.311h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.406 0 22.675 0z" />
              </svg>
            </button>

            <button className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="w-4 h-4"
              >
                <path d="M19.615 3.184c-1.107-.426-7.633-.426-7.633-.426s-6.526 0-7.633.426c-1.107.426-1.934 1.62-1.934 3.018v4.596c0 1.398.827 2.592 1.934 3.018 1.107.426 7.633.426 7.633.426s6.526 0 7.633-.426c1.107-.426 1.934-1.62 1.934-3.018V6.202c0-1.398-.827-2.592-1.934-3.018zM9.546 12.703V7.297l5.455 2.703-5.455 2.703z" />
              </svg>
            </button>

            <button className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="w-4 h-4"
              >
                <path d="M7.75 2h8.5C19.35 2 21 3.65 21 5.75v8.5c0 2.1-1.65 3.75-3.75 3.75h-8.5C5.65 18 4 16.35 4 14.25v-8.5C4 3.65 5.65 2 7.75 2zm8.5 1.5h-8.5c-1.18 0-2.25 1.07-2.25 2.25v8.5c0 1.18 1.07 2.25 2.25 2.25h8.5c1.18 0 2.25-1.07 2.25-2.25v-8.5c0-1.18-1.07-2.25-2.25-2.25zM12 5.5a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1.5a5 5 0 100 10 5 5 0 000-10zm4.25-.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Second Section */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/location2.png"
              alt="Location"
              width={16}
              height={16}
              className="relative"
            />
            <p className="text-sm">India</p>
          </div>
          <p className="text-sm text-gray-500">
            © 2023 Nike, Inc. All Rights Reserved
          </p>
          <div className="flex space-x-4 text-gray-400 text-sm">
            <a href="#">Guides</a>
            <a href="#">Terms of Sale</a>
            <a href="#">Terms of Use</a>
            <a href="#">Nike Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
