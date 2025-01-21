import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  title: string;
  price: number;
  colors:string;
  size:string;
  category: string;
  imageUrl: string;
  slug?: { current: string };
}

const Hero: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [category] = useState("shirts");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/products");

        if (!res.ok) {
          throw new Error("Uploading products is under process!");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter((key: Product) => key.category === category);
    setFilteredProducts(filtered);
  }, [products, category]);

  return (
    <section>
      <p
        className="ml-10 m-2"
        style={{ width: "90.9", height: "27px", fontSize: "23px", lineHeight: "28px" }}
      >
        Gear Up
      </p>

      <div className="flex">
        <div style={{ width: "211px", marginTop: "2px", marginLeft: "507px", height: "48px" }}>
          <button
            style={{ width: "83px", height: "72px", marginLeft: "7px", marginTop: "2px", lineHeight: "24px" }}
            className="text-black whitespace-nowrap pb-44"
          >
            Shop Mens
          </button>
        </div>

        <div style={{ width: "211px", marginTop: "2px", marginLeft: "507px", height: "48px" }}>
          <button
            style={{ width: "83px", height: "72px", marginLeft: "7px", marginTop: "2px", lineHeight: "24px" }}
            className="text-black whitespace-nowrap pb-44"
          >
            Shop Womens
          </button>
        </div>
      </div>

      <div
        className="main div flex"
        style={{ width: "1344px", height: "561px", marginLeft: "48px" }}
      >
        <div className="combine div1 flex">
          {filteredProducts.map((key: Product) => (
            <Link href={`/product_details/${key.slug?.current || ""}`}>
            <div
              key={key.id}
              style={{ width: "300px", height: "393px", marginLeft: "48px" }}
              className="bg-gray-100 p-4 bottom-4 relative"
            >
              {key.imageUrl && (
                
                <Image
                  width={250}
                  height={50}
                  src={key.imageUrl}
                  alt="Product Image"
                  className="rounded"
                />
              )}

              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <span
                    className="text-base font-semibold whitespace-nowrap"
                    style={{ maxWidth: "200px" }}
                  >
                    {key.title}
                  </span>
                  <h1 className="text-sm font-bold text-right">${key.price}</h1>
                </div>

                <div className="mt-2">
                  <h2 className="text-gray-600 text-sm">Mens Short-Sleeve</h2>
                  <h2 className="text-gray-600 text-sm">{key.category}</h2>
                </div>

                <div className="top-2 right-1 relative">
              {Array.isArray(key.colors) && key.colors.includes("red") && (
              <button className="border-2 border-gray-300 ml-1 mx-1 bg-red-700 rounded-full w-6 h-6"></button>
              )}
              
              {Array.isArray(key.colors) && key.colors.includes("green") && (
              <button className="border-2 border-gray-300 ml-1 mx-1 bg-green-700 rounded-full w-6 h-6"></button>
              )} 
              
              {Array.isArray(key.colors) && key.colors.includes("blue") && (
              <button className="border-2 border-gray-300 ml-1 mx-1 bg-blue-700 rounded-full w-6 h-6"></button>
              )}
              
              {Array.isArray(key.colors) && key.colors.includes("pink") && (
              <button className="border-2 border-gray-300 ml-1 mx-1 bg-pink-700 rounded-full w-6 h-6"></button>
              )}
              
              {Array.isArray(key.colors) && key.colors.includes("black") && (
              <button className="border-2 border-gray-300 ml-1 mx-1 bg-gray-900 rounded-full w-6 h-6"></button>
              )}
              </div>

            <div className="left-0 top-5 relative">
            {Array.isArray(key.size) && key.size.includes('S') && <span className="border border-gray-300 px-1 mx-1">S</span>}
            {Array.isArray(key.size) && key.size.includes('M') && <span className="border border-gray-300 px-1 mx-1">M</span>}
            {Array.isArray(key.size) && key.size.includes('L') && <span className="border border-gray-300 px-1 mx-1">L</span>}
            {Array.isArray(key.size) && key.size.includes('XL') && <span className="border border-gray-300 px-1 mx-1">XL</span>}
            {Array.isArray(key.size) && key.size.includes('XXL') && <span className="border border-gray-300 px-1 mx-1">XXL</span>}
            </div>



              </div>
            </div></Link>
          ))}
          
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
