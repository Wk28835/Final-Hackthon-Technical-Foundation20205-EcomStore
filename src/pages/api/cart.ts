import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "../../sanity/lib/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // POST request to create cart item
  if (req.method === "POST") {
    const { _id, userId, title, price, quantity, colors, status, size, category, image, slug } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User email is required!" });
    }


    if (!title || !price || !quantity || !size || !colors || !category || !image) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const cartItem = await sanityClient.create({
        _type: "cart",
        _id,
        user: userId.email, // Store user email in the cart document
        title,
        price,
        quantity,
        colors,
        status,
        size,
        category,
        slug,
        image,
      });

      return res.status(201).json({ success: true, cartItem });
    } catch (error) {
      console.error("Error creating cart item:", error);
      return res.status(500).json({ message: "Failed to create cart item", error });
    }
  }

  // GET request to fetch cart items for a specific user
  if (req.method === "GET") {
    const { email } = req.query; // Get email from query parameters

    if (!email) {
      return res.status(400).json({ message: "User email is required!" });
    }

    const query = `*[_type == "cart" && user == $email]{
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
      const cartItems = await sanityClient.fetch(query, { email });
      if (cartItems.length === 0) {
        return res.status(200).json({ message: "No cart items found" });
      }
      res.status(200).json(cartItems || []);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      res.status(500).json({ message: "Failed to fetch cart items", error });
    }
  }

  // DELETE request to delete a cart item
  if (req.method === "DELETE") {
    const { cartId } = req.body;

    if (!cartId) {
      return res.status(400).json({ message: "Cart ID is required!" });
    }

    try {
      await sanityClient.delete(cartId);
      return res.status(200).json({ message: "Product deleted successfully!" });
    } catch (error) {
      console.error("Error deleting cart item:", error);
      return res.status(500).json({ message: "Failed to delete product", error });
    }
  }

  // Method not allowed for unsupported HTTP methods
  return res.status(405).json({ error: "Method Not Allowed" });
};

export default handler;
