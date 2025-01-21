

import Image from "next/image";
import { useEffect, useState } from "react";

interface Cart {
  _id: string;
  title: string;
  price: number;
  category: string;
  colors:string;
  size:string;
  status:string;
  image: string;
  slug?: { current: string };
}
  




export default function Cart() {

  const [products,setProducts]=useState<Cart[]>([]);
 
    useEffect(() => {
        async function fetchProducts() {
          try {
            const res = await fetch("/api/cart");
            if (!res.ok) {
              throw new Error("Failed to fetch products");
            }
            const data: Cart[] = await res.json();
            console.log("check image",data);
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
        if(response.ok){
          setProducts(products.filter((products)=> products._id !==cartId))
          window.alert("Product Removed Successfullly!");
        }else{
            console.error("Failed to Delete Cart Item!")
        }
      }

      const calculateSubtotal=()=>{
        let subTotal =0;
        products.forEach(item=>{
          subTotal +=item.price;
        });
        return subTotal;
      }

      
        
    return (
   
        
    <div className="w-full h-full lg:flex-row gap-8 relative"
    style={{top:"40px",left:"155.5px",position:"relative"}}>
        
        <section className="lg:w-2/3 mb-28 rounded-md"
        style={{width:"733.33px",height:"547.89px"}}>
          <div className="bg-gray-100 shadow-sm rounded-md"
          style={{width:"717.33px",height:"62.89px",left:"8px",position:"relative",
            paddingRight:"14px",gap:"5.88px" }}>

         


            

            <h1
             style={{width:"41px",height:"33px",top:"27px",left:"8px",position:"relative",
              fontSize:"22px",lineHeight:"33px",fontWeight:"500" }}>
                Bag
              </h1> 


           <div className="main div1 rounded-md shadow-inner shadow-gray-100"
           style={{width:"717.33px",height:"436px",top:"60.89px",left:"8px",position:"relative",
            paddingTop:"24px",paddingBottom:"24px", boxShadow:"0.2%"}}>
           {products.map((item)=>(
          
            
              <div key={item._id} className="gap-8 p-3 mainproduct1 div flex"
              style={{width:"717.33px",height:"170px" }}>

                <Image className="rounded-md" width={150} height={150} alt="image"
                src={item.image}
                />
                <div className="gap-6"
                style={{width:"537.33px",height:"170px"}}>
                  
                  <div className="flex">
                  <p
                  style={{width:"227px",height:"28px",top:"1.89px",left:"6px",position:"relative",
                    fontSize:"15px",fontWeight:"500",lineHeight:"28px"}}>

                      {item.title}
                  </p>

                  <p className="text-gray-600"
                  style={{width:"117px",height:"28px",textAlign:"right",left:"178px",position:"relative",
                    fontSize:"15px",fontWeight:"400",lineHeight:"28px"}}>

                  MRP: ₹ {item.price}
                  </p>
                  </div>


                  <p className="text-gray-600"
                  style={{width:"232px",height:"28px",top:"1.89px",left:"6px",position:"relative",
                    fontSize:"15px",fontWeight:"400",lineHeight:"28px"}}>

                      Men&#39;s Short-Sleeve Running Top
                  </p>

                  <p className="text-gray-600"
                  style={{width:"173px",height:"28px",top:"1.89px",left:"6px",position:"relative",
                    fontSize:"15px",fontWeight:"400",lineHeight:"28px"}}>

                     Category:{item.category}
                  </p>

                  <div className="flex">

                  <p className="text-gray-600"
                  style={{width:"173px",height:"28px",top:"1.89px",left:"6px",position:"relative",
                    fontSize:"15px",fontWeight:"400",lineHeight:"28px"}}>

                      Size
                  </p>

                  <p className="text-gray-600"
                  style={{width:"173px",height:"28px",top:"1.89px",right:"120px",position:"relative",
                    fontSize:"15px",fontWeight:"400",lineHeight:"28px"}}>L</p>
                    
                    <p className="text-gray-600"
                  style={{width:"173px",height:"28px",top:"1.89px",right:"250px",position:"relative",
                    fontSize:"15px",fontWeight:"400",lineHeight:"28px"}}>Quantity<span className="mx-4">1</span></p>

                  </div>

                  <div className="bottom-3 right-2 relative">
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


                  <div className="gap-2 flex"
                  style={{width:"537.33px",height:"64px"}}>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="1"
                      className="w-6 h-6"
                    >
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
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 8.25v10.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 18.75V8.25M9.75 12v4.5m4.5-4.5v4.5M4.5 6.75h15M10.5 6.75V5.25a1.5 1.5 0 011.5-1.5h0a1.5 1.5 0 011.5 1.5v1.5m-6 0h6"
                    />
                  </svg>
                </button>

                    
                  </div>

                </div>

              </div> ))} 
     
            </div> 


          </div>
      </section>

        <section className="lg:w-1/3 rounded-md"
        style={{width:"350.67px",height:"295px",left:"741.33px", position:"relative"}}>

          <h1
           style={{width:"96px",height:"33px",top:"-556px",left:"8px",position:"relative",
            fontSize:"21px",fontWeight:"500",lineHeight:"33px"}}>
            Summary
          </h1>

          
          <p
           style={{width:"60px",height:"28px",top:"-530px",left:"8px",position:"relative",
            fontSize:"15px",fontWeight:"400",lineHeight:"33px"}}>
            Subtotal
          </p>

          <p
           style={{width:"80px",height:"28px",top:"-560px",left:"250.73px",position:"relative",
            fontSize:"15px",fontWeight:"400",lineHeight:"33px"}}>
            ₹ {calculateSubtotal()}
          </p>

          <p className="text-nowrap"
           style={{width:"60px",height:"28px",top:"-540px",left:"8px",position:"relative",
            fontSize:"15px",fontWeight:"400",lineHeight:"33px"}}>
            Estimated Delivery & Handling
          </p>

          <p
           style={{width:"80px",height:"28px",top:"-570px",left:"250.73px",position:"relative",
            fontSize:"15px",fontWeight:"400",lineHeight:"33px"}}>
            Free
          </p> 

          <div className="bg-black py-4 text-white text-center"
           style={{width:"334.67px",height:"60px",top:"-500px",left:"8px",borderRadius:"30px",position:"relative",
                }}>
            
            <button className="text-center" onClick={() => window.location.href = "/checkout"}
            style={{width:"133px",height:"24px",fontWeight:"500",fontSize:"15px",lineHeight:"24px",
              
            }}>Member Checkout</button>
            
          </div> 


          

        </section>



    </div>
        
  

  
      
      
    );
  };
  
  
  
