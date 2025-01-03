// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "../../sanity/lib/client"

type Data = {
  name: string;
  
};

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data>,) 
{
    
  const category = req.query.category; // Extract category from query
  const query = `*[_type == "product" ${category ? `&& category == $category` : ''}]{
      _id,
      title,
      price,
      quantity,
      category,
      "imageUrl": image.asset->url,
      slug
    }`;
  
  // If category is defined, pass it in the parameters object
  const items = await sanityClient.fetch(query, category ? { category } : {});
  
  res.status(200).json(items);
}
