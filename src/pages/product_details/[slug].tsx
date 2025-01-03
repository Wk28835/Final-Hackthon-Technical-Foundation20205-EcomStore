import sanityClient from "@/sanity/lib/client";
import Image from "next/image";




export default async function product_details({ params }: { params: { slug: string } }) {
  // Fetch product data by slug
  console.log("slug Params:",params);
  const query = `*[_type == "product" && slug.current == $slug][0]{
    title,
    price,
    quantity,
    category,
    "imageUrl": image.asset->url
  }`;

  const product = await sanityClient.fetch(query, { slug: params.slug });

  // If product not found, show 404
  if (!product) {
   console.error("founde this error");
  }

 
  return (
    <div  style={{width:"1140px",height:"1073px"}}>
      <section style={{width:"900px",height:"1125px",top:"106px",left:"120px",position:"absolute"}}>

      <div>
        <Image style={{top:"110px", left:"-22px",position:"absolute"}}
        alt="image" width={653} height={653}
        src="/shoe5.png"/>

        <div style={{width:"376px",height:"1041px",top:"-26px",left:"768px",position:"absolute"}}>
        <h1 className="text-black"
        style={{width:"367px",fontSize:"48px",height:"96px",top:"135px", position:"absolute",lineHeight:"48px"}}>
          Nike Air Force 1 
          PLT.AF.ORM
        </h1>
        <p style={{width:"374.92px",fontSize:"15px",height:"252px",top:"255px", position:"absolute",lineHeight:"28px"}}>
        Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out inspired construction including unique layering and exposed foam accents ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal while the unexpected shading rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
        </p>

        <p style={{width:"229px",fontSize:"36px",height:"34px",top:"535px", position:"absolute",lineHeight:"28px"}}>
        $ {product.price}
        </p>
        
        <div className="bg-black flex"
         style={{width:"174.42px",borderRadius:"30px",height:"48px",top:"595px", position:"absolute",
          paddingTop:"6.5px",paddingLeft:"22.5px",paddingRight:"23.92",paddingBottom:"5.5"}}>

            <Image className="mb-2" alt="image"
            width={29} height={29}
            src="/cart1.png"
            />

           <button className="text-white my-1 " 
            style={{textAlign:"center",width:"99px",height:"29px",fontSize:"16px",lineHeight:"24px",fontWeight:"500"}}
          >
            Add to Cart
            </button>

        </div>
        

        </div>

      </div>


      </section>
      

    </div>

    
    
  );
};

