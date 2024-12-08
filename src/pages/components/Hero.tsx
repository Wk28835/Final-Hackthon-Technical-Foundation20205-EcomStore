

import Image from "next/image";


const hero: React.FC = () => {

  




 
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



<div
  style={{ width: "300px", height: "393px", marginLeft: "48px" }}
  className="bg-gray-100 p-4"
>

  
  
  <Image
    width={300}
    height={300}
    src="/boy2.png"
    alt="Product Image"
    className="rounded" />


  <div className="mt-4">
    
    <div className="flex justify-between items-center">
      <span
        className="text-base font-semibold whitespace-nowrap "
        style={{ maxWidth: "200px" }}
      >
        Nike Dri-FIT TechKnit Ultra
      </span>
      <h1 className="text-sm font-bold text-right">₹3.895</h1>
    </div>

   
    <div className="mt-2">
      <h2 className="text-gray-600 text-sm">Mens Short-Sleeve</h2>
      <h2 className="text-gray-600 text-sm">Running Top</h2>
    </div>
  </div>
  </div>

  <div
  style={{ width: "300px", height: "393px", marginLeft: "48px" }}
  className="bg-gray-100 p-4"
>
  
  <Image
    width={300}
    height={300}
    src="/boy4.png"
    alt="Product Image"
    className="rounded"
  />


  <div className="mt-4">
    
    <div className="flex justify-between items-center">
      <span
        className="text-base font-semibold whitespace-nowrap "
        style={{ maxWidth: "200px" }}
      >
        Nike Dri-FIT TechKnit Ultra
      </span>
      <h1 className="text-sm font-bold text-right">₹3.895</h1>
    </div>

   
    <div className="mt-2">
      <h2 className="text-gray-600 text-sm">Mens Short-Sleeve</h2>
      <h2 className="text-gray-600 text-sm">Running Top</h2>
    </div>
  </div>
  </div>



    

</div>



<div className="combine div2 flex"> 

<div
  style={{ width: "300px", height: "393px", marginLeft: "48px" }}
  className="bg-gray-100 p-4"
>
  
  <Image
    width={300}
    height={300}
    src="/girl1.png"
    alt="Product Image"
    className="rounded" />


  <div className="mt-4">
    
    <div className="flex justify-between items-center">
      <span
        className="text-base font-semibold whitespace-nowrap overflow-hidden text-ellipsis"
        style={{ maxWidth: "200px" }}
      >
        Nike Dri-FIT TechKnit Ultra
      </span>
      <h1 className="text-sm font-bold text-right">₹3.895</h1>
    </div>

   
    <div className="mt-2">
      <h2 className="text-gray-600 text-sm">Mens Short-Sleeve</h2>
      <h2 className="text-gray-600 text-sm">Running Top</h2>
    </div>
  </div>
  </div>

  <div
  style={{ width: "300px", height: "393px", marginLeft: "48px" }}
  className="bg-gray-100 p-4"
>
  
  <Image
    width={300}
    height={300}
    src="/boy5.png"
    alt="Product Image"
    className="rounded"
  />


  <div className="mt-4">
    
    <div className="flex justify-between items-center">
      <span
        className="text-base font-semibold whitespace-nowrap overflow-hidden text-ellipsis"
        style={{ maxWidth: "200px" }}
      >
        Nike Dri-FIT TechKnit Ultra
      </span>
      <h1 className="text-sm font-bold text-right">₹3.895</h1>
    </div>

   
    <div className="mt-2">
      <h2 className="text-gray-600 text-sm">Mens Short-Sleeve</h2>
      <h2 className="text-gray-600 text-sm">Running Top</h2>
    </div>
  </div>
  </div>



    

</div>

    

    

</div>    

    </section>
    
  );
};

export default hero;
