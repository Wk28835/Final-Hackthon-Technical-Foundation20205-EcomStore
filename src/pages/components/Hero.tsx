
import Image from "next/image";
import { useEffect, useState } from "react";


const hero: React.FC = () => {

  const [products,setProducts]= useState([]);
  
  const [filteredproducts,setfilteredProducts]= useState([]);
  
  const [category,setCategory]= useState("shirts");

    useEffect(()=>{

      async function fetchdata(){
        
        try{
          const res = await fetch("/api/products");

          if (!res.ok){
            throw new Error("Uploading products is under process!")
          }  
          const data = await res.json();
          setProducts(data);        
        } 
        catch(error){
            console.error("error fetching",error);
        }
    }
    fetchdata();
      
    },[]);

    useEffect(()=>{
      const filtered = products.filter((key:any)=>key.category == category)
      setfilteredProducts(filtered);
    },[products,category])

 
  return (
        
      <section>

      <p className="ml-10 m-2"
      style={{width:"90.9",height:"27px",fontSize:"23px",lineHeight:"28px"}}
          >Gear Up</p>

      <div className="flex">
      <div style={{width:"211px",marginTop:"2px", marginLeft:"507px",height:"48px"}}
        >
        <button
        style={{ width: "83px", height: "72px", marginLeft: "7px",marginTop:"2px", lineHeight: "24px" }}
        className="text-black whitespace-nowrap pb-44"
      >
        Shop Mens
      </button>
      </div>

      <div style={{width:"211px",marginTop:"2px", marginLeft:"507px",height:"48px"}}
        >
        <button
        style={{ width: "83px", height: "72px", marginLeft: "7px",marginTop:"2px", lineHeight: "24px" }}
        className="text-black whitespace-nowrap pb-44"
      >
        Shop Womens
      </button>
      </div>
      </div>





      <div className="main div flex"
      style={{width:"1344px",height:"561px",marginLeft:"48px"}}>
      
        


      <div className="combine div1 flex"> 



      {filteredproducts.map((key:any)=>(
      <div key={key}
        style={{ width: "300px", height: "393px", marginLeft: "48px" }}
        className="bg-gray-100 p-4">

    {key.imageUrl && (   
         <Image
          width={300}
          height={300}
          src={key.imageUrl} 
          alt="Product Image"
          className="rounded" /> 
          )}

        <div className="mt-4">
          
          <div className="flex justify-between items-center">
            <span
              className="text-base font-semibold whitespace-nowrap "
              style={{ maxWidth: "200px" }}>{key.title}</span>
            <h1 className="text-sm font-bold text-right">${key.price}</h1>
          </div>

        
          <div className="mt-2">
            <h2 className="text-gray-600 text-sm">Mens Short-Sleeve</h2>
            <h2 className="text-gray-600 text-sm">{key.category}</h2>
          </div>
        </div>
        </div>))}

 
  </div>          

      </div>    

          </section>
          
        );
      };

      export default hero;
