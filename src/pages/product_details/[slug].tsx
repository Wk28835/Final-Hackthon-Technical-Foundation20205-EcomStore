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
    _id:string;
    title: string;
    price: number;
    quantity: number;
    category: string;
    colors: string[];
    size:string[];
    status: string;
    imageUrl: string;
  } | null;
}

export default function ProductDetails({ product }: ProductDetailsProps) {

  const router = useRouter();

  const [productData,setProductData]= useState({
    size:"",
    color:"",
  })

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
    
     
     const user = getCookie("user") as string | undefined;// Check if user data exists in localStorage
    
     if (!user) {
          router.push('/login'); // Redirect to login if not authenticated
    }

    else{
       
    try {
      await sanityClient.create({
        _type: "cart",
        title: product.title,
        price: product.price,
        quantity: 1,
        colors: productData.color,
        status: product.status,
        size:productData.size,
        category: product.category,
        image: product.imageUrl,
      });
      
      toast.success("Product Added to Cart!")
    } catch {
      toast.error("Failed to Add Product")
    }
}  
}; 
  
const handleAddToWish = async () => {   
    
     
  const user = getCookie("user") as string | undefined;// Check if user data exists in localStorage
 
  if (!user) {
       router.push('/login'); // Redirect to login if not authenticated
 }

 else{
    
 try {
   await sanityClient.create({
     _type: "wish",
     title: product.title,
     price: product.price,
     quantity: 1,
     colors: productData.color,
     status: product.status,
     size:productData.size,
     category: product.category,
     image: product.imageUrl,
   });
   
   toast.success("Product Added to Wish List!")
 } catch {
   toast.error("Failed to Add to Wish List!")
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
          <div className="flex items-center mt-6 space-x-3">
            <span className="font-semibold text-gray-700">Colors:</span>
            {product.colors.map((color) => (
             <button
             onClick={() => setProductData({ ...productData, color })}
             key={color}
             className={`
               w-6 h-6 rounded-full border-2 
               ${color === "red" ? "bg-red-600" : 
                  color === "green" ? "bg-green-600" : 
                  color === "blue" ? "bg-blue-600" : 
                  color === "pink" ? "bg-pink-600" : 
                  color === "black" ? "bg-gray-900" : "bg-gray-300"} 

               
               active:ring-1 active:ring-offset-1 active:ring-black 
               ${productData.color === color ? "ring-2 ring-offset-2 ring-black" : "ring-0"}
             `}
           ></button>
           
            ))}
          </div>

            {/*we can use both way to render array of size and color one way is
            used above color case and on is used below */}
          <span className="font-semibold top-3 relative text-gray-700">Size:</span>
          <div className="left-16 bottom-3 relative"> 
            <select value={productData.size}  // Binding the value to the state
              onChange={(e) => setProductData({ ...productData, size: e.target.value })}
             name="size">  
             {Array.isArray(product.size) && product.size.includes('S') && <option className="border border-gray-300 px-1 mx-1">S</option>}
            {Array.isArray(product.size) && product.size.includes('M') && <option  className="border border-gray-300 px-1 mx-1">M</option>}
            {Array.isArray(product.size) && product.size.includes('L') && <option  className="border border-gray-300 px-1 mx-1">L</option>}
            {Array.isArray(product.size) && product.size.includes('XL') && <option  className="border border-gray-300 px-1 mx-1">XL</option>}
            {Array.isArray(product.size) && product.size.includes('XXL') && <option  className="border border-gray-300 px-1 mx-1">XXL</option>}
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
          
          <button
            onClick={handleAddToWish}
            className="mt-6 left-8 relative bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-200"
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
