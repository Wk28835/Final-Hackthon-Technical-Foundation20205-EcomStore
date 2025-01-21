
import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "../../sanity/lib/client"

type Data = {
  name: string;
  
};

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data>,) 
{
    if(req.method === "GET"){
  const category = req.query.category; // Extract category from query
  const query = `*[_type == "product" ${category ? `&& category == $category` : ''}]{
      _id,
      title,
      price,
      quantity,
      category,
      size,
      colors,
      status,
      "imageUrl": image.asset->url,
      slug
    }`;
  
  
  const items = await sanityClient.fetch(query, category ? { category } : {});
  
  res.status(200).json(items);
  }
  
}