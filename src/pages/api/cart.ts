// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "../../sanity/lib/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const query = `*[_type == "cart"]{
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

    try {
      const cartItems = await sanityClient.fetch(query);
      res.status(200).json(cartItems);
    } catch {
      res.status(500).json({ message: "Failed to fetch cart items!" });
    }
  } else if (req.method === "DELETE") {
    const { cartId } = req.body;

    if (!cartId) {
      return res.status(400).json({ message: "Product ID is required!" });
    }

    try {
      await sanityClient.delete(cartId);
      return res.status(200).json({ message: "Product Deleted Successfully!" });
    } catch {
      return res.status(500).json({ message: "Failed to delete product!" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed!" });
  }
};

export default handler;
