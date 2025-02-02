import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "../../sanity/lib/client";

// Define the expected structure of an order item
interface OrderItem {
  product_title: string;
  price: number;
  quantity: number;
  colors?: string;
  size?: string;
  image: string;
  category: string;
}

// Define the expected structure of the order data
interface OrderData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

// Define the expected structure of the request body
interface OrderRequestBody {
  items: OrderItem[];
  orderData: OrderData;
  total: number;
  status: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { items, orderData, total, status } = req.body as OrderRequestBody; // Explicitly type req.body

    

    if (!items || !orderData || !total || !status) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      // Create an order document for each item in the cart
      const createdOrders = await Promise.all(
        items.map(async (item: OrderItem) => {
          return sanityClient.create({
            _type: "orders",
            // Customer details
            name: orderData.name,
            email: orderData.email,
            phone: orderData.phone,
            address: orderData.address,
            // Product details
            product_title: item.product_title,
            price: item.price,
            quantity: item.quantity,
            colors: item.colors,
            size: item.size,
            image: item.image,
            category: item.category,
            // Order details
            status: status,
            // Additional fields (if needed)
            slug: {
              _type: "slug",
              current: item.product_title.toLowerCase().replace(/\s+/g, "-"),
            },
          });
        })
      );

      return res.status(201).json({ success: true, createdOrders });
    } catch (error) {
      console.error("Error creating cart item:", error);
      return res.status(500).json({ message: "Failed to create cart item", error });
    }
  }

  // GET request to fetch cart items
  if (req.method === "GET") {
    const {email} = req.query;

    if (!email) {
      return res.status(400).json({ message: "Email is required!" });
    }
    
    const query = `*[_type == "orders" && email == $email]{
        _id,
        name,
        email,
        phone,
        address,
        product_title,
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
      const cartItems = await sanityClient.fetch(query,{ email });
      if (cartItems.length === 0) {
        return res.status(200).json({ message: "No cart items found" });
      }
      res.status(200).json(cartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      res.status(500).json({ message: "Failed to fetch cart items", error });
    }
  }

  // DELETE request to delete a cart item
  if (req.method === "DELETE") {
    const { cartId } = req.body as { cartId: string };

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
