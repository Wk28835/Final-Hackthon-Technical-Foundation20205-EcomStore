import Image from "next/image";
import { useEffect, useState } from "react";
import { Flip, toast, ToastContainer } from "react-toastify";
import { AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai';
interface Cart {
  _id: string;
  title: string;
  price: number;
  category: string;
  colors: string;
  quantity:number;
  size: string;
  status: string;
  image: string;
  slug?: { current: string };
}

export default function Cart() {
  const [products, setProducts] = useState<Cart[]>([]);
  
  
  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/cart");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Cart[] = await res.json();
        console.log("check image", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  

  const handleRemoveCart = async (cartId: string): Promise<void> => {
    const response = await fetch("/api/cart", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartId }),
    });
    if (response.ok) {
      setProducts(products.filter((products) => products._id !== cartId));

      toast.success('Product Deleted from Cart!', {
        position: "top-right",
        autoClose:1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
       
        theme:"colored",
        transition:Flip,
        });
  
    } else {
      console.error("Failed to Delete Cart Item!");
      toast.error("Failed to Delete Cart Product!")
    }
  };

  
  const calculateSubtotal = () => {
    let subTotal = 0;
    products.forEach((item) => {
      subTotal += item.price * item.quantity;
    });
    return subTotal;
  };



 // Increments the quantity of the product by 1.
 // Uses map to create a new array with updated quantities.
  const handleIncrease = (id: string): void => {
    // Find the product by ID
    const updatedProducts = products.map((product) => {
      if (product._id === id) {
        // Increment the quantity of the product
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
  
    // Update the state with the new product list
    setProducts(updatedProducts);
  };

  
   
  const handleDecrese = (id:string):void =>{
    const updatedProducts = products.map((product)=>{

      //Decreases the quantity but ensures it doesn't go below 1.
      if(product._id === id && product.quantity >1){
      
        // Decrement the quantity of the product
        return {...product, quantity:product.quantity - 1};
      }
      return product;
    })
     // Update the state with the new product list
    setProducts(updatedProducts);
  }
  


  return (
    <div className="w-full h-full lg:flex gap-8 relative px-4 lg:px-8"
      style={{ top: "40px", position: "relative" }}>
         <ToastContainer />
      <section className="lg:w-2/3 mb-28 rounded-md mx-auto"
        style={{ width: "100%", maxWidth: "717px", height: "auto" }}>
        <div className="bg-gray-100 shadow-sm rounded-md px-4 py-4"
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
          <h1 className="text-xl font-medium mb-4">Bag</h1>
          <div className="main div1 rounded-md shadow-inner shadow-gray-100"
            style={{ width: "100%", height: "auto", paddingTop: "24px", paddingBottom: "24px" }}>
            {products.map((item) => (
              <div key={item._id} className="flex gap-8 p-3 mainproduct1 div w-full"
                style={{ height: "170px" }}>
                <Image className="rounded-md" width={150} height={150} alt="image"
                  src={item.image} />
                <div className="gap-6" style={{ flex: 1 }}>
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-gray-600 text-sm">MRP: ₹ {item.price}</p>
                  </div>
                  <p className="text-gray-600 text-sm">Men&#39;s Short-Sleeve Running Top</p>
                  <p className="text-gray-600 text-sm">Category: {item.category}</p>
                  <div className="flex justify-between">
                    <p className="text-gray-600 text-sm">Size :</p>
                    <p className="text-gray-600 mr-64 text-sm">{item.size}</p>
                    <p  className="text-gray-600 mt-1 text-sm">Quantity: </p>
                   <button onClick={()=>handleDecrese(item._id)} className="pl-6 "><AiFillMinusCircle/></button>  <span id="quantity" className="">{item.quantity}</span><button onClick={()=>handleIncrease(item._id)}><AiFillPlusCircle/></button>
                  </div>
                  <div className="bottom-0 right-2 relative">
                    {Array.isArray(item.colors) && item.colors.includes("red") && (
                      <button className="border-2 border-gray-300 ml-1 mx-1 bg-red-700 rounded-full w-6 h-6"></button>
                    )}

                    {Array.isArray(item.colors) && item.colors.includes("green") && (
                      <button className="border-2 border-gray-300 ml-1 mx-1 bg-green-700 rounded-full w-6 h-6"></button>
                    )}

                    {Array.isArray(item.colors) && item.colors.includes("blue") && (
                      <button className="border-2 border-gray-300 ml-1 mx-1 bg-blue-700 rounded-full w-6 h-6"></button>
                    )}

                    {Array.isArray(item.colors) && item.colors.includes("pink") && (
                      <button className="border-2 border-gray-300 ml-1 mx-1 bg-pink-700 rounded-full w-6 h-6"></button>
                    )}

                    {Array.isArray(item.colors) && item.colors.includes("black") && (
                      <button className="border-2 border-gray-300 ml-1 mx-1 bg-gray-900 rounded-full w-6 h-6"></button>
                    )}
                  </div>
                  <div className="gap-2 flex justify-between mt-4">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth="1"
                        className="w-6 h-6">
                        <path
                          d="M12 21s-7-4.434-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.566-7 11-7 11z"
                        />
                      </svg>
                    </button>
                    <button onClick={() => handleRemoveCart(item._id)} className="rounded hover:bg-gray-100 text-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 8.25v10.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 18.75V8.25M9.75 12v4.5m4.5-4.5v4.5M4.5 6.75h15M10.5 6.75V5.25a1.5 1.5 0 011.5-1.5h0a1.5 1.5 0 011.5 1.5v1.5m-6 0h6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Checkout Section */}
      <section className="lg:w-1/3 rounded-md lg:absolute lg:right-8 top-0 lg:mt-0 mt-8 mx-auto"
        style={{ width: "100%", maxWidth: "350px", height: "auto", position: "relative" }}>
        <h1 className="text-xl font-medium mb-4">Summary</h1>

        <p className="text-sm">Subtotal</p>
        <p className="text-sm text-right">₹ {calculateSubtotal()}</p>

        <p className="text-sm">Estimated Delivery & Handling</p>
        <p className="text-sm text-right">Free</p>

        <div className="bg-black py-4 text-white text-center"
          style={{
            position: "relative", width: "100%", maxWidth: "334.67px", borderRadius: "30px", top: "20px", left: "8px"
          }}>
          <button className="w-full py-2 text-center"
            onClick={() => window.location.href = "/checkout"}
            style={{ fontWeight: "500", fontSize: "15px" }}>
            Member Checkout
          </button>
        </div>
      </section>
    </div>
  );
};
