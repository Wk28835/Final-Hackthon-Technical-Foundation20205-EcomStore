import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  title: string;
  price: number;
  colors: string;
  size: string;
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
    <section className="px-4 py-8">
      <p className="text-2xl font-bold mb-4">Gear Up</p>

      <div className="flex justify-center gap-4 mb-8">
        <button className="bg-black text-white px-4 py-2 rounded">Shop Mens</button>
        <button className="bg-black text-white px-4 py-2 rounded">Shop Womens</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((key: Product) => (
          <Link href={`/product_details/${key.slug?.current || ""}`} key={key.id}>
            <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg transition">
              {key.imageUrl && (
                <Image
                  width={250}
                  height={250}
                  src={key.imageUrl}
                  alt={key.title}
                  className="rounded mb-4"
                />
              )}

              <div>
                <h3 className="text-lg font-semibold truncate">{key.title}</h3>
                <p className="text-gray-700 mt-1">${key.price}</p>
                <p className="text-sm text-gray-500">{key.category}</p>
                <div className="flex items-center mt-4 gap-2">
                
                {Array.isArray(key.colors) && key.colors.includes("red") && (
                  <button className="border-2 border-gray-300 bg-red-700 rounded-full w-6 h-6"></button>
                )}
                {Array.isArray(key.colors) && key.colors.includes("green") && (
                  <button className="border-2 border-gray-300 bg-green-700 rounded-full w-6 h-6"></button>
                )}
                {Array.isArray(key.colors) && key.colors.includes("blue") && (
                  <button className="border-2 border-gray-300 bg-blue-700 rounded-full w-6 h-6"></button>
                )}
              </div>

              <div className="flex mt-2 gap-2">
                {Array.isArray(key.size) && key.size.includes("S") && (
                  <span className="border border-gray-300 px-2">S</span>
                )}
                {Array.isArray(key.size) && key.size.includes("M") && (
                  <span className="border border-gray-300 px-2">M</span>
                )}
              </div>
                

              
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;
