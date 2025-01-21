import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import {useState } from "react"; // Import useState to manage search state

export default function App({ Component, pageProps }: AppProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  
  return (
    <div className="flex flex-col min-h-screen flex-grow">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> {/* Pass search state to Navbar */}
      <Component  {...pageProps} searchQuery={searchQuery} /> {/* Pass search state to pages */}
    </div>
  );
}
