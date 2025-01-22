import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  title: string;
  price: number;
  colors: string;
  size: string;
  quantity: string;
  status: string;
  category: string;
  imageUrl: string;
  slug?: { current: string };
}

const Slider = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [category] = useState("shoes");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product: Product) => product.category === category);
    setFilteredProducts(filtered);
  }, [products, category]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold mb-2">Hello Nike App</h1>
        <p className="text-sm">Download the app access everything Nike. Get Your Great</p>
      </div>

      {/* Main Banner */}
      <div className="mt-10 mx-auto max-w-screen-xl">
        <Image
          alt="Shoe"
          width={1344}
          height={700}
          src="/shoe.png"
          className="rounded-lg w-full object-cover"
        />
        <div className="text-center mt-6">
          <p className="text-sm">First Look</p>
          <h1 className="text-2xl sm:text-3xl font-bold mt-4">NIKE AIR MAX PULSE</h1>
          <p className="text-sm mt-4 max-w-2xl mx-auto">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push
            you past your limits and help you go to the max.
          </p>
          <div className="flex flex-wrap justify-center mt-4 gap-4">
            <button className="bg-black text-white px-6 py-2 rounded-full">Notify Me</button>
            <button className="bg-black text-white px-6 py-2 rounded-full">Shop Air Max</button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="mt-16 mx-auto max-w-screen-xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg sm:text-xl font-medium">Best of Air Max</h1>
          <button className="text-blue-500">Shop</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product: Product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-sm">
              <Link href={`/product_details/${product.slug?.current || ""}`}>
                {product.imageUrl && (
                  <Image
                    alt={product.title}
                    src={product.imageUrl}
                    width={300}
                    height={300}
                    className="rounded w-full object-cover"
                  />
                )}
              </Link>
              <h2 className="mt-4 font-semibold text-lg">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-sm font-bold text-red-700 mt-2">{product.status}</p>
              <p className="text-sm text-gray-500">Qty: {product.quantity}</p>

              <div className="flex items-center mt-4 gap-2">
                {Array.isArray(product.colors) && product.colors.includes("red") && (
                  <button className="border-2 border-gray-300 bg-red-700 rounded-full w-6 h-6"></button>
                )}
                {Array.isArray(product.colors) && product.colors.includes("green") && (
                  <button className="border-2 border-gray-300 bg-green-700 rounded-full w-6 h-6"></button>
                )}
                {Array.isArray(product.colors) && product.colors.includes("blue") && (
                  <button className="border-2 border-gray-300 bg-blue-700 rounded-full w-6 h-6"></button>
                )}
              </div>

              <div className="flex mt-2 gap-2">
                {Array.isArray(product.size) && product.size.includes("S") && (
                  <span className="border border-gray-300 px-2">S</span>
                )}
                {Array.isArray(product.size) && product.size.includes("M") && (
                  <span className="border border-gray-300 px-2">M</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        href="/Product"
        className="block text-center mt-6 text-blue-500 hover:underline"
      >
        More Products...
      </Link>

      {/* Featured Section */}
      <div className="mt-16 mx-auto max-w-screen-xl">
        <h1 className="text-2xl font-bold mb-6">Featured</h1>
        <div className="relative">
          <Link href="/product_details">
            <Image
              alt="Featured Image"
              width={1344}
              height={700}
              src="/boy.jpeg"
              className="rounded-lg w-full object-cover"
            />
          </Link>
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-3xl sm:text-4xl font-bold">STEP INTO WHAT FEELS GOOD</h1>
            <p className="mt-2 text-sm">
              Cause everyone should know the feeling of running in that perfect pair
            </p>
            <button className="bg-black text-white px-6 py-2 mt-4 rounded-full">
              Find Your Shoe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
