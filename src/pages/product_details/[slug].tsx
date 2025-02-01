import sanityClient from "@/sanity/lib/client";
import Image from "next/image";
import { GetStaticPropsContext } from "next";
import Footer from "../components/Footerr";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

interface ProductDetailsProps {
  product: {
    _id: string;
    title: string;
    price: number;
    quantity: number;
    category: string;
    colors: string[] | null; // Handle null or undefined values
    size: string[] | null; // Handle null or undefined values
    status: string;
    imageUrl: string;
  } | null;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const router = useRouter();

  // Handle the fallback state (when `product` is null)
  const [productData, setProductData] = useState({
    size: product?.size?.[0] || "",
    color: product?.colors?.[0] || "",
  });

  // Handle the loading state for fallback
  if (router.isFallback) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-800">Loading...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-800">404 - Product Not Found</h1>
        <p className="text-gray-500 mt-4">
          We could not find the product you were looking for. Please try again later.
        </p>
      </div>
    );
  }

  const handleAddToCart = async () => {
    const user = getCookie("user") as string | undefined;

    if (!user) {
      router.push("/login");
      return;
    }

    if (!productData.size || !productData.color) {
      toast.warn("Please select color and size to proceed!");
      return;
    }
    console.log("check color and size", productData.color, productData.size);

    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: product.title,
          price: product.price,
          quantity: 1, // Default to 1 or allow user input
          colors: productData.color,
          status: product.status,
          size: productData.size,
          category: product.category,
          image: product.imageUrl,
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

  const handleAddToWish = async () => {
    const user = getCookie("user") as string | undefined;
    if (!user) {
      router.push("/login");
    } else {
      if (!productData.size || !productData.color) {
        toast.warn("Please Select Color and Size to Proceed!");
        return;
      }
      try {
        await sanityClient.create({
          _type: "wish",
          title: product.title,
          price: product.price,
          quantity: 1,
          colors: productData.color,
          status: product.status,
          size: productData.size,
          category: product.category,
          image: product.imageUrl,
        });
        toast.success("Product Added to Wish List!");
      } catch {
        toast.error("Failed to Add to Wish List!");
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* Product Details Section */}
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1">
          <Image
            alt={product.title}
            src={product.imageUrl}
            width={600}
            height={600}
            className="rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 id="title" className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p id="category" className="text-gray-500 text-lg mt-2">Category: {product.category}</p>
          <p id="quantity" className="text-gray-500 text-lg mt-2">Available Quantity: {product.quantity}</p>
          <p id="status" className="text-gray-500 text-lg mt-2">Status: {product.status}</p>

          {/* Colors */}
          <div className="mt-6">
            <span className="font-semibold text-gray-700">Colors:</span>
            <select
              value={productData.color}
              onChange={(e) => setProductData({ ...productData, color: e.target.value })}
              className="mt-2 p-2 border border-gray-300 rounded-md"
            >
              {product.colors?.map((color) => (
                <option key={color} value={color}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Size */}
          <div className="mt-6">
            <span className="font-semibold text-gray-700">Size:</span>
            <select
              value={productData.size}
              onChange={(e) => setProductData({ ...productData, size: e.target.value })}
              className="mt-2 p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Size</option>
              {product.size?.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Price */}
          <p id="price" className="text-2xl font-bold text-gray-800 mt-6">${product.price}</p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-200"
          >
            Add to Cart
          </button>

          {/* Add to Wish List Button */}
          <button
            onClick={handleAddToWish}
            className="mt-6 ml-4 bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-200"
          >
            Add to Wish List
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Fetch product details and paths
export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const slug = params?.slug as string;

  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    price,
    quantity,
    size,
    colors,
    status,
    category,
    "imageUrl": image.asset->url
  }`;

  const product = await sanityClient.fetch(query, { slug });

  return {
    props: { product: product || null },
    revalidate: 10, // Regenerate the page every 10 seconds
  };
}

export async function getStaticPaths() {
  const query = `*[_type == "product"] {
    "slug": slug.current
  }`;

  const products = await sanityClient.fetch(query);

  const paths = products.map((product: { slug: string }) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: true, // Enable fallback for on-demand paths
  };
}
