// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "../../sanity/lib/client"


const handler= async ( req: NextApiRequest, res: NextApiResponse)=>{

if(req.method === "GET"){
    const query = `*[_type == "wish"]{
        _id,
        title,
        price,
        quantity,
        category,
        image,
        size,
        colors,
        status,
        slug
        }`;
  
  // If category is defined, pass it in the parameters object
  const cartItems = await sanityClient.fetch(query);
  
  res.status(200).json(cartItems);
}
  if(req.method === "DELETE"){
    const {itemId}= req.body;
    if(!itemId){
      return res.status(400).json({message:"Product ID is required!"})
    }
    else{
      return res.status(200).json({message:"Product Deleted Success!"})

    }
  }
  return res.status(405).json({error:"Method Not Allowed!"});
}
export default handler;
