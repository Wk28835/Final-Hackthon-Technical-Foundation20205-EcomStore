
import Image from "next/image";


const product: React.FC = () => {

  




 
  return (
    <div>
<section>
        <div className="text-black text-nowrap flex"
         style={{height:"36px",marginLeft:"48px",marginTop:"95px"}}>
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
      <section className="products ml-10">
        <div className="main div1 flex"
        style={{width:"",height:""}}>

          <div className="product1"
          style={{width:"348",height:"533px",marginLeft:"8px"}}>
            <Image alt="image" className="bg-gray-500" width={348} height={348}
            src="/shoe3.png"
            />
              <div
          style={{width:"348",height:"185px",marginTop:"8px"}}>

            <h1 className="text-orange-700"
            style={{width:"47px",height:"28px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >Just In</h1>

            <h1 className="text-black"
            style={{width:"166px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Nike Air Force 1 Mid  07 </h1>
            
             <h1 className="text-gray-500"
            style={{width:"88px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Men s Shoes</h1>

            <h1 className="text-gray-500"
            style={{width:"60.68px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >1 color</h1>

          <h1 className="text-black"
            style={{width:"132.42px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >MRP : ₹ 10 795.00</h1>
            

          </div>

          </div>


          <div className="product2"
          style={{width:"348",height:"533px",marginLeft:"8px"}}>
            <Image alt="image" className="bg-gray-500" width={348} height={348}
            src="/shoe4.png"
            />
              <div
          style={{width:"348",height:"185px",marginTop:"8px"}}>

            <h1 className="text-orange-700"
            style={{width:"47px",height:"28px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >Just In</h1>

            <h1 className="text-black"
            style={{width:"166px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Nike Air Force 1 Mid  07 </h1>
            
             <h1 className="text-gray-500"
            style={{width:"88px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Men s Shoes</h1>

            <h1 className="text-gray-500"
            style={{width:"60.68px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >1 color</h1>

          <h1 className="text-black"
            style={{width:"132.42px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >MRP : ₹ 10 795.00</h1>
            

          </div>

          </div>

          <div className="product3"
          style={{width:"348",height:"533px",marginLeft:"8px"}}>
            <Image alt="image" className="bg-gray-500" width={348} height={348}
            src="/shoe5.png"
            />
              <div
          style={{width:"348",height:"185px",marginTop:"8px"}}>

            <h1 className="text-orange-700"
            style={{width:"47px",height:"28px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >Just In</h1>

            <h1 className="text-black"
            style={{width:"166px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Nike Air Force 1 Mid  07 </h1>
            
             <h1 className="text-gray-500"
            style={{width:"88px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Men s Shoes</h1>

            <h1 className="text-gray-500"
            style={{width:"60.68px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >1 color</h1>

          <h1 className="text-black"
            style={{width:"132.42px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >MRP : ₹ 10 795.00</h1>
            

          </div>

          </div>


        

        </div>


        <div className="main div2 flex"
        style={{width:"",height:""}}>

          <div className="product1"
          style={{width:"348",height:"533px",marginLeft:"8px"}}>
            <Image alt="image" className="bg-gray-500" width={348} height={348}
            src="/shoe6.png"
            />
              <div
          style={{width:"348",height:"185px",marginTop:"8px"}}>

            <h1 className="text-orange-700"
            style={{width:"47px",height:"28px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >Just In</h1>

            <h1 className="text-black"
            style={{width:"166px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Nike Air Force 1 Mid  07 </h1>
            
             <h1 className="text-gray-500"
            style={{width:"88px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Men s Shoes</h1>

            <h1 className="text-gray-500"
            style={{width:"60.68px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >1 color</h1>

          <h1 className="text-black"
            style={{width:"132.42px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >MRP : ₹ 10 795.00</h1>
            

          </div>

          </div>


          <div className="product2"
          style={{width:"348",height:"533px",marginLeft:"8px"}}>
            <Image alt="image" className="bg-gray-500" width={348} height={348}
            src="/shoe7.png"
            />
              <div
          style={{width:"348",height:"185px",marginTop:"8px"}}>

            <h1 className="text-orange-700"
            style={{width:"47px",height:"28px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >Just In</h1>

            <h1 className="text-black"
            style={{width:"166px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Nike Air Force 1 Mid  07 </h1>
            
             <h1 className="text-gray-500"
            style={{width:"88px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Men s Shoes</h1>

            <h1 className="text-gray-500"
            style={{width:"60.68px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >1 color</h1>

          <h1 className="text-black"
            style={{width:"132.42px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >MRP : ₹ 10 795.00</h1>
            

          </div>

          </div>


          <div className="product6"
          style={{width:"348",height:"533px",marginLeft:"8px"}}>
            <Image alt="image" className="bg-gray-500" width={348} height={348}
            src="/shoe8.png"
            />
              <div
          style={{width:"348",height:"185px",marginTop:"8px"}}>

            <h1 className="text-orange-700"
            style={{width:"47px",height:"28px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >Just In</h1>

            <h1 className="text-black"
            style={{width:"166px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Nike Air Force 1 Mid  07 </h1>
            
             <h1 className="text-gray-500"
            style={{width:"88px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Men s Shoes</h1>

            <h1 className="text-gray-500"
            style={{width:"60.68px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >1 color</h1>

          <h1 className="text-black"
            style={{width:"132.42px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >MRP : ₹ 10 795.00</h1>
            

          </div>

          </div>


        

        </div>




        <div className="main div3 flex"
        style={{width:"",height:""}}>

          <div className="product1"
          style={{width:"348",height:"533px",marginLeft:"8px"}}>
            <Image alt="image" className="bg-gray-500" width={348} height={348}
            src="/shoe9.png"
            />
              <div
          style={{width:"348",height:"185px",marginTop:"8px"}}>

            <h1 className="text-orange-700"
            style={{width:"47px",height:"28px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >Just In</h1>

            <h1 className="text-black"
            style={{width:"166px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Nike Air Force 1 Mid  07 </h1>
            
             <h1 className="text-gray-500"
            style={{width:"88px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Men s Shoes</h1>

            <h1 className="text-gray-500"
            style={{width:"60.68px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >1 color</h1>

          <h1 className="text-black"
            style={{width:"132.42px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >MRP : ₹ 10 795.00</h1>
            

          </div>

          </div>


          <div className="product2"
          style={{width:"348",height:"533px",marginLeft:"8px"}}>
            <Image alt="image" className="bg-gray-500" width={348} height={348}
            src="/shoe10.png"
            />
              <div
          style={{width:"348",height:"185px",marginTop:"8px"}}>

            <h1 className="text-orange-700"
            style={{width:"47px",height:"28px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >Just In</h1>

            <h1 className="text-black"
            style={{width:"166px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Nike Air Force 1 Mid  07 </h1>
            
             <h1 className="text-gray-500"
            style={{width:"88px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Men s Shoes</h1>

            <h1 className="text-gray-500"
            style={{width:"60.68px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >1 color</h1>

          <h1 className="text-black"
            style={{width:"132.42px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >MRP : ₹ 10 795.00</h1>
            

          </div>

          </div>


          <div className="product6"
          style={{width:"348",height:"533px",marginLeft:"8px"}}>
            <Image alt="image" className="bg-gray-500" width={348} height={348}
            src="/shoe11.png"
            />
              <div
          style={{width:"348",height:"185px",marginTop:"8px"}}>

            <h1 className="text-orange-700"
            style={{width:"47px",height:"28px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >Just In</h1>

            <h1 className="text-black"
            style={{width:"166px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Nike Air Force 1 Mid  07 </h1>
            
             <h1 className="text-gray-500"
            style={{width:"88px",height:"24px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >Men s Shoes</h1>

            <h1 className="text-gray-500"
            style={{width:"60.68px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"24px"}}
            >1 color</h1>

          <h1 className="text-black"
            style={{width:"132.42px",height:"17px",marginTop:"8px",fontSize:"15px",lineHeight:"28px"}}
            >MRP : ₹ 10 795.00</h1>
            

          </div>

          </div>


        

        </div>
      </section>
  </div>


</div>



</div>
    
    
  );
};

export default product;
