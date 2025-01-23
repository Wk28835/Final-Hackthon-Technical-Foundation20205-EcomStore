import sanityClient from '@/sanity/lib/client';
import type { NextApiRequest, NextApiResponse } from 'next';
// Adjust import based on your setup

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { term } = req.query;

  if (!term || typeof term !== 'string') {
    return res.status(400).json({ message: 'Search term is required.' });
  }

  const query = `*[_type == "product" && title match $searchTerm + "*"] {
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
  
  

  const products = await sanityClient.fetch(query, { searchTerm: term });

  res.status(200).json(products);
};

export default handler;
