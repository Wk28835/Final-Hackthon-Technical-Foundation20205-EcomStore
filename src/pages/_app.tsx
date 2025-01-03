import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";  // Assuming Navbar is in the components folder
import Footer from "./components/Footerr";  // Assuming Navbar is in the components folder
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {


  


  


  return (
    <>
      <Navbar />  {/* Render Navbar */}
      
      <Component {...pageProps} />
      <Footer/>  {/* Render the page component */}
    </>
  );
  }

