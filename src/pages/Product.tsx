import Image from "next/image";
import Footer from "./components/Footerr";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  price: number;
  colors: string[];
  size: string[];
  quantity: string;
  status: string;
  category: string;
  imageUrl: string;
  slug?: { current: string };
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number>(1000); // Adjust according to your max price

  // Fetch products
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products!");

        const data: Product[] = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  // Filter logic
  useEffect(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
      const priceMatch = product.price <= priceRange;
      return categoryMatch && priceMatch;
    });
    setFilteredProducts(filtered);
  }, [products, selectedCategory, priceRange]);

  return (
    <div>
      <section>
        <div className="items-center mr-6 relative justify-self-end flex">
          {/* Filter Button */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className=" flex gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-8.586L3.293 6.707A1 1 0 013 6V4z"
              />
            </svg>
            <span>Filter</span>
          </button>

          {/* Filter Dropdown */}
          {isFilterOpen && (
            <div className="absolute right-0 mt-52 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <div className="p-4 space-y-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Filter by Category</label>
                  <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">All</option>
                    <option value="shoes">Shoes</option>
                    <option value="shirts">Shirts</option>
                    <option value="trouser">Trousers</option>
                  </select>
                </div>

                {/* Price Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Filter by Price</label>
                  <input
                    type="range"
                    min={0}
                    max={5000} // Adjust to your max price
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full"
                  />
                  <p>Up to ₹{priceRange}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product Display */}
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/4 md:w-1/6 p-4">
          <section>
            <div className="main" style={{ width: "100%", height: "849px" }}>
              <div className="border-t border-b border-gray-300 py-4">
                <ul className="text-sm space-y-2">
                  <li>Shoes</li>
                  <li>Tops & T-Shirts</li>
                  <li>Hoodies & Sweatshirts</li>
                  <li>Jackets</li>
                  <li>Trousers & Tights</li>
                  <li>Shorts</li>
                  <li>Tracksuits</li>
                  <li>Jumpsuits & Rompers</li>
                  <li>Skirts & Dresses</li>
                  <li>Socks</li>
                  <li>Accessories & Equipment</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="w-full sm:w-3/4 md:w-4/5 px-4">
          <section className="flex flex-wrap justify-start gap-0 mt-10">
            {filteredProducts.length === 0 ? (
              <div className="text-center text-xl font-extrabold text-gray-700 w-fit">
                No items available! Stay tuned with us.
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="flex flex-col my-4 bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                >
                  {/* Product Image */}
                  <div>
                    <Link href={`/product_details/${product.slug?.current || ""}`}>
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
                  </div>

                  {/* Product Details */}
                  <div className="mt-4">
                    <h1 className="text-orange-700 font-medium text-sm">{product.status}</h1>
                    <h2 className="text-black font-semibold text-lg mt-2">{product.title}</h2>
                    <p className="text-gray-500 text-sm mt-1">{product.category}</p>
                    <h3 className="text-black font-semibold text-md mt-4">MRP: ₹{product.price}</h3>
                  </div>
                </div>
              ))
            )}
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
