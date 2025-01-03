import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

 const  Slider=({})=> {
   
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("shoes"); // Default category to "shoes"

  useEffect(() => {
    // Fetch all products
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products"); // Ensure API is set up
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products by category
    const filtered =products.filter((product:any) => product.category === category);
    setFilteredProducts(filtered);
  }, [products, category]);
  

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col text-center justify-center">
        <h1 className="text-xl font-bold mb-4">Hello Nike App</h1>
        <p className="text-xs mt-4">Download the app access everything Nike. Get Your Great</p>
      </div>

      {/* Main Banner */}
      <div className="mt-10 mx-auto max-w-screen-xl">
        <Image alt="Shoe" width={1344} height={700} src="/shoe.png" className="rounded-lg" />
        <div className="text-center mt-6">
          <p className="text-sm">First Look</p>
          <h1 className="text-3xl font-bold mt-4">NIKE AIR MAX PULSE</h1>
          <p className="text-sm mt-4">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to
            push you past your limits and help you go to the max.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded-full">Notify Me</button>
            <button className="bg-black text-white px-6 py-2 rounded-full">Shop Air Max</button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="mt-16 mx-auto max-w-screen-xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-medium">Best of Air Max</h1>
          <button className="text-blue-500">Shop</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {filteredProducts.map((product:any) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-sm">
              <Link href={`/product_details/${product.slug?.current || ""}`} >
              {product.imageUrl && (
              <Image
                alt={product.title}
                src={product.imageUrl}
                width={300}
                height={300}
                className="rounded"
              />
            )}
              </Link>
              <h2 className="mt-4 font-semibold text-lg">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
              <button
                

                className="bg-green-500 text-white rounded p-2 mt-4">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="mt-16 mx-auto max-w-screen-xl">
        <h1 className="text-2xl font-bold mb-6">Featured</h1>
        <div className="relative">
          <Link href="/product_details">
            <Image alt="Featured Image" width={1344} height={700} src="/boy.jpeg" className="rounded-lg" />
          </Link>
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl font-bold">STEP INTO WHAT FEELS GOOD</h1>
            <p className="mt-2 text-sm">
              Cause everyone should know the feeling of running in that perfect pair
            </p>
            <button className="bg-black text-white px-6 py-2 mt-4 rounded-full">Find Your Shoe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slider;