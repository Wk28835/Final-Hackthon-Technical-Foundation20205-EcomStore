import sanityClient from "@/sanity/lib/client";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface Wish {
  _id: string;
  title: string;
  price: number;
  category: string;
  colors: string;
  size: string;
  status: string;
  image: string;
  slug?: { current: string };
}

export default function WishList() {
  const [products, setProducts] = useState<Wish[]>([]);
  const router = useRouter();

  const user = getCookie("user") as string | undefined;

  useEffect(() => {
      async function fetchProducts() {
  
        if (!user) {
          router.push('/login');
          return;
        }
        const userdata = JSON.parse(user);
        
        const email = userdata.email;
        
        try {
          const res = await fetch(`/api/wish?email=${email}`);
          if (!res.ok) {
            throw new Error("Failed to fetch products");
          }
          const data: Wish[] = await res.json();
          
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
      fetchProducts();
    }, []);

    const handleAddToCart = async (item: Wish) => {
      const user = getCookie("user") as string | undefined;
     
      if (!user) {
        router.push("/login");
        return;
      }
      const userdata = JSON.parse(user);
      const email = userdata.email; 
     console.log("check wish",userdata,email)
     try {
        const response = await fetch("/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId:userdata,
            title: item.title,
            price: item.price,
            quantity: 1, // Default to 1 or allow user input
            colors: item.colors,
            status: item.status,
            size: item.size,
            category: item.category,
            image: item.image,
            slug:item.slug
          }),
        });
  
        const res = await response.json();
  
        if (response.ok) {
          toast.success("Product added to cart!");
        } else {
          toast.error(res.message || "Failed to add product to cart!");
        }
      } catch {
        toast.error("Failed to fetch product to cart");
      }
    };

  const handleRemoveItem = async (itemId: string): Promise<void> => {
    try {
      const response = await fetch("/api/wish", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId }),
      });

      if (response.ok) {
        setProducts(products.filter((product) => product._id !== itemId));
        alert("Product removed successfully!");
      } else {
        console.error("Failed to delete item.");
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const calculateSubtotal = () => {
    let subTotal = 0;
    products.forEach((item) => {
      subTotal += item.price;
    });
    return subTotal;
  };

  if (!products.length) {
    return <div className="text-center mt-44 text-red-500 text-2xl">Wishlist is Empty! Please Add Product to Maintain!</div>; // Fallback for empty products
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-10 relative">
      <ToastContainer />
      <section className="lg:w-2/3 bg-gray-100 p-4 rounded-md shadow-sm">
        <div className="mb-4 flex justify-between items-center p-4 bg-white rounded-md shadow-md">
          <div>
            <p className="text-sm font-medium">Free Delivery</p>
            <p className="text-xs text-gray-600">
              Applies to orders of ₹ 14,000.00 or more.
            </p>
          </div>
          <p className="text-xs underline cursor-pointer">View details</p>
        </div>

        <h1 className="text-lg font-semibold mb-4">Your Wishlist</h1>

        <div className="space-y-6">
          {products.map((item) => (
            <div
              key={item._id}
              className="flex gap-4 p-4 bg-white rounded-md shadow-md"
            >
              <Image
                className="rounded-md"
                width={150}
                height={150}
                alt="Product image"
                src={item.image}
              />

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-md font-medium mb-1">{item.title}</h2>
                  <p className="text-sm text-gray-600">
                    Men&#39;s Short-Sleeve Running Top
                  </p>
                  <p className="text-sm text-gray-600">Category: {item.category}</p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="font-medium top-0 relative text-gray-800">
                    Size: {item.size}
                  </p>
                  <p className="text-sm">
                    Quantity: <span className="font-semibold">1</span>
                  </p>

                  <div className="flex items-center space-x-2">
                    <span className="font-semibold top-0 relative text-gray-700">
                      Color:
                    </span>
                    <div className="right-1 top-1 relative">
                      {Array.isArray(item.colors) && item.colors.includes("red") && (
                        <button className="border-2 border-gray-300 ml-1 mx-1 bg-red-700 rounded-full w-6 h-6"></button>
                      )}
                      {Array.isArray(item.colors) &&
                        item.colors.includes("green") && (
                          <button className="border-2 border-gray-300 ml-1 mx-1 bg-green-700 rounded-full w-6 h-6"></button>
                        )}
                      {Array.isArray(item.colors) &&
                        item.colors.includes("blue") && (
                          <button className="border-2 border-gray-300 ml-1 mx-1 bg-blue-700 rounded-full w-6 h-6"></button>
                        )}
                      {Array.isArray(item.colors) &&
                        item.colors.includes("pink") && (
                          <button className="border-2 border-gray-300 ml-1 mx-1 bg-pink-700 rounded-full w-6 h-6"></button>
                        )}
                      {Array.isArray(item.colors) &&
                        item.colors.includes("black") && (
                          <button className="border-2 border-gray-300 ml-1 mx-1 bg-gray-900 rounded-full w-6 h-6"></button>
                        )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm font-medium text-gray-800">
                    MRP: ₹ {item.price}
                  </p>

                  <div className="flex space-x-4">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        className="w-6 h-6"
                      >
                        <path d="M12 21s-7-4.434-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.566-7 11-7 11z" />
                      </svg>
                    </button>

                    <button
            onClick={() => handleAddToCart(item)}
            className="mt-2 bg-black text-white px-3 py-1 rounded-lg shadow-md hover:bg-gray-800 transition duration-200"
          >
            Add to Cart
          </button>

                    <button
                      onClick={() => handleRemoveItem(item._id)}
                      className="mt-2 bg-red-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-gray-800 transition duration-200">Delete
                      
                       
                      
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="lg:w-1/3 bg-white p-4 rounded-md shadow-md">
        <h1 className="text-lg font-semibold mb-4">Summary</h1>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p className="text-sm">Subtotal</p>
            <p className="text-sm">₹{calculateSubtotal()}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm">Estimated Delivery & Handling</p>
            <p className="text-sm">Free</p>
          </div>
        </div>

       
      </section>
    </div>
  );
}
