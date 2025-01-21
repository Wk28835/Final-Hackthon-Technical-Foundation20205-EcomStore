
import Image from "next/image";
import Footer from "./components/Footerr";
import { useEffect, useState } from "react";
import Link from "next/link";



interface Product{
  _id: string;
  title: string;
  price: number;
  colors:string;
  size:string;
  quantity:string;
  status:string;
  category: string;
  imageUrl: string;
  slug?: { current: string };
}

const Product: React.FC = () => {

  const [item,setitem]=useState<Product[]>([]);

 
  
  
  
  
  useEffect(()=>{
    async function fetchitem() {
      
        try{
            const res = await fetch("/api/products");
            if(!res.ok){
              throw new Error("Failed to fetch Products!")
            }
            const data:[Product]= await res.json();
            console.log("check data",data);
            setitem(data);
        }
        catch(error){
          console.error("Error Fetching Products:",error);
        }
    }
    fetchitem();
  },[]);


    

  return (
    <div>
  <section>
        <div className="text-black text-nowrap flex"
         style={{height:"36px",marginLeft:"48px",marginTop:"60px"}}>
        <h1  style={{width:"110px",height:"32px",fontSize:"24px", lineHeight:"31.2px"}}
        >New (500)</h1>

        <h1 className="text-end ml-auto mx-3">Hide Filters</h1>
       <Image alt="image" width={24} height={24}
       src="/filter.png"/>

        
        <button className="flex mr-24 mx-4">Sort by
        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 9l6 6 6-6" />
          <path d="M12 15V3" />
            </svg>
        </button>
        </div>
        
      </section>
      

    <div className="flex">

<div className="div1">
         


        <section>
          <div className="main div"
         style={{width:"260px",height:"849px"}}>

        <div  style={{width:"192px",height:"400.72px"}}>
          <ul className="text-nowrap">
            <li style={{fontSize:"15px",fontWeight:"500",width:"45.58px",height:"17px",marginTop:"20px", marginLeft:"46px"}}>Shoes</li>
            <li style={{fontSize:"15px",fontWeight:"500",width:"83.79px",height:"17px",marginTop:"10px", marginLeft:"46px"}}>Tops & T-Shirts</li>
            <li style={{fontSize:"15px",fontWeight:"500",width:"83.79px",height:"17px",marginTop:"10px", marginLeft:"46px"}}>Hoodies & SweatShirts</li>
            <li style={{fontSize:"15px",fontWeight:"500",width:"83.79px",height:"17px",marginTop:"10px", marginLeft:"46px"}}>Jackets</li>
            <li style={{fontSize:"15px",fontWeight:"500",width:"83.79px",height:"17px",marginTop:"10px", marginLeft:"46px"}}>Trouse & Tights</li>
            <li style={{fontSize:"15px",fontWeight:"500",width:"83.79px",height:"17px",marginTop:"10px", marginLeft:"46px"}}>Shorts</li>
            <li style={{fontSize:"15px",fontWeight:"500",width:"83.79px",height:"17px",marginTop:"10px", marginLeft:"46px"}}>Tracksuits</li>
            <li style={{fontSize:"15px",fontWeight:"500",width:"83.79px",height:"17px",marginTop:"10px", marginLeft:"46px"}}>Jumpsuits & Rampers</li>
            <li style={{fontSize:"15px",fontWeight:"500",width:"83.79px",height:"17px",marginTop:"10px", marginLeft:"46px"}}>Skirts & Dressess</li>
            <li style={{fontSize:"15px",fontWeight:"500",width:"83.79px",height:"17px",marginTop:"10px", marginLeft:"46px"}}>Socks</li>
            <li style={{fontSize:"15px",fontWeight:"500",width:"83.79px",height:"17px",marginTop:"10px", marginLeft:"46px"}}>Accessories & <br/>Equipments</li>
          </ul>

          <div 
          style={{width:"192px", height:"163px",borderTop:"1px",borderBottom:"1px",borderColor:"#E5E5E5"}}>
            
      <div className="gender flex mt-16 ml-9">
            <h1
            style={{fontWeight:"bold",width:"58.03px",height:"17px",marginTop:"18px"}}>Gender</h1>
            <Image alt="image" 
             width={14} height={14}
            style={{marginTop:"17px", marginLeft:"172.16px"}}
            src="/arrow.png"
            />
     </div>

    <div className="ml-9 mt-6 flex-col flex" style={{width: "196px", height: "80px"}}>
            <div className="flex items-center">
              <input className="mr-2" type="checkbox" id="men" />
              <label htmlFor="men">Men</label>
            </div>
            <div className="flex items-center">
              <input className="mr-2" type="checkbox" id="women" />
              <label htmlFor="women">Women</label>
            </div>
            <div className="flex items-center">
              <input className="mr-2" type="checkbox" id="unisex" />
              <label htmlFor="unisex">Unisex</label>
            </div>
</div>



<div className="Kids flex mt-16 ml-9">
            <h1
            style={{fontWeight:"bold",width:"58.03px",height:"17px",marginTop:"18px"}}>Kids</h1>
            <Image alt="image" width={14} height={14}
            style={{marginTop:"17px", marginLeft:"172.16px"}}
            src="/arrow.png"
            />
     </div>

    <div className="ml-9 mt-6 flex-col flex" style={{width: "196px", height: "80px"}}>
            <div className="flex items-center">
              <input className="mr-2" type="checkbox" id="men" />
              <label htmlFor="men">Boy</label>
            </div>
            <div className="flex items-center">
              <input className="mr-2" type="checkbox" id="women" />
              <label htmlFor="women">Girl</label>
            </div>
           
</div>


<div className="shop by price flex mt-16 ml-9 text-nowrap">
            <h1
            style={{fontWeight:"bold",width:"58.03px",height:"17px",marginTop:"18px"}}>Shop by Price</h1>
            <Image alt="image" width={14} height={14}
            style={{marginTop:"17px", marginLeft:"172.16px"}}
            src="/arrow.png"
            />
     </div>

    <div className="ml-9 mt-6 flex-col flex" style={{width: "196px", height: "80px"}}>
            <div className="flex items-center">
              <input className="mr-2" type="checkbox" id="men" />
              <label htmlFor="men">Under ₹ 2.500.00</label>
            </div>
            <div className="flex items-center">
              <input className="mr-2" type="checkbox" id="women" />
              <label htmlFor="women">₹ 2 501.00 - ₹</label>
            </div>
           
    </div>

   </div>
  </div>
 </div>
       </section>
        </div>


     <div>

     <section className="item flex flex-wrap justify-start gap-1 ml-10 mt-10">

{item.length === 0 ? (
  <div className="text-center mt-44 text-4xl font-extrabold text-gray-700 w-full">
    No items available! Stay tuned with us.
  </div>
) : (
  item.map((item: Product) => (
    <div 
      key={item._id} 
      className="main flex flex-col my-1 bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow"
      style={{ width: "315px", height: "auto" }}
    >
      {/* Product Image */}
      <div className="product1">
      <Link href={`/product_details/${item.slug?.current || ""}`}>
                {item.imageUrl && (
                  <Image
                    alt={item.title}
                    src={item.imageUrl}
                    width={300}
                    height={300}
                    className="rounded"
                  />
                )}
              </Link>
      </div>

      {/* Product Details */}
      <div className="product-details mt-4">
        <h1 className="text-orange-700 font-medium text-sm">{item.status}</h1>
        <h2 className="text-black font-semibold text-lg mt-2">{item.title}</h2>
        <p className="text-gray-500 text-sm mt-1">{item.category}</p>

        {/* Colors */}
        <div className="colors mt-4 flex items-center">
          {Array.isArray(item.colors) && item.colors.includes("red") && (
            <button className="border-2 border-gray-300 mx-1 bg-red-700 rounded-full w-6 h-6"></button>
          )}
          {Array.isArray(item.colors) && item.colors.includes("green") && (
            <button className="border-2 border-gray-300 mx-1 bg-green-700 rounded-full w-6 h-6"></button>
          )}
          {Array.isArray(item.colors) && item.colors.includes("blue") && (
            <button className="border-2 border-gray-300 mx-1 bg-blue-700 rounded-full w-6 h-6"></button>
          )}
          {Array.isArray(item.colors) && item.colors.includes("pink") && (
            <button className="border-2 border-gray-300 mx-1 bg-pink-700 rounded-full w-6 h-6"></button>
          )}
          {Array.isArray(item.colors) && item.colors.includes("black") && (
            <button className="border-2 border-gray-300 mx-1 bg-gray-900 rounded-full w-6 h-6"></button>
          )}
        </div>

        {/* Sizes */}
        <div className="sizes mt-4 flex items-center">
          {Array.isArray(item.size) && item.size.includes('S') && <span className="border border-gray-300 px-2 py-1 mx-1 text-sm rounded">S</span>}
          {Array.isArray(item.size) && item.size.includes('M') && <span className="border border-gray-300 px-2 py-1 mx-1 text-sm rounded">M</span>}
          {Array.isArray(item.size) && item.size.includes('L') && <span className="border border-gray-300 px-2 py-1 mx-1 text-sm rounded">L</span>}
          {Array.isArray(item.size) && item.size.includes('XL') && <span className="border border-gray-300 px-2 py-1 mx-1 text-sm rounded">XL</span>}
          {Array.isArray(item.size) && item.size.includes('XXL') && <span className="border border-gray-300 px-2 py-1 mx-1 text-sm rounded">XXL</span>}
        </div>

        {/* Price */}
        <h3 className="text-black font-semibold text-md mt-4">MRP: $ {item.price}</h3>
      </div>
    </div>
  ))
)}
</section>


</div>


</div>

<Footer/>

</div>
    
    
  );
};

export default Product;
