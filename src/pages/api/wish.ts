// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "../../sanity/lib/client"


const handler= async ( req: NextApiRequest, res: NextApiResponse)=>{

  if (req.method === "POST") {
    const { product, color, size, userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User not authenticated" });
    }

    try {
      // Create wish list item in Sanity
      const wishItem = await sanityClient.create({
        _type: "wish",
        title: product.title,
        price: product.price,
        quantity: 1,
        colors: color,
        status: product.status,
        size: size,
        category: product.category,
        image: product.imageUrl,
      });

      return res.status(201).json({ success: true, wishItem });
    } catch (error) {
      return res.status(500).json({ message: "Failed to create wish list item", error });
    }
    }

    if (req.method === "GET") {
      const { email } = req.query; // Get email from query parameters
  
      if (!email) {
        return res.status(400).json({ message: "User email is required!" });
      }
  
      const query = `*[_type == "wish" && user == $email]{
          _id,
          user,
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
        const wishItems = await sanityClient.fetch(query, { email });
        if (wishItems.length === 0) {
          return res.status(200).json({ message: "No cart items found" });
        }
        res.status(200).json(wishItems || []);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        res.status(500).json({ message: "Failed to fetch cart items", error });
      }
    }
if (req.method === "DELETE") {
  const { itemId } = req.body;

  if (!itemId) {
    return res.status(400).json({ message: "Product ID is required!" });
  }

  try {
    console.log("Deleting item with ID:", itemId); // Debugging
    await sanityClient.delete(itemId);
    return res.status(200).json({ message: "Product deleted successfully!" });
  } catch (error) {
    console.error("Failed to delete product:", error);
    return res.status(500).json({ message: "Error deleting product." });
  }
}

  return res.status(405).json({error:"Method Not Allowed!"});
}
export default handler;
