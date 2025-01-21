import sanityClient from "@/sanity/lib/client";
import  client  from "@/sanity/lib/client"; // Replace with your configured Sanity client
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, password, address, phone, city } = req.body;

    // Validate all required fields
    if (!name || !email || !password || !address || !phone || !city) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      // Hash the password
     

      // Save the new user to Sanity
      const newUser = await client.create({
        _type: "user",
        name,
        email,
        password, // Save hashed password
        address,
        phone,
        city,
      });

      return res.status(201).json({ userId: newUser._id });
    } catch (error) {
      console.error("Error creating user:", error);
      return res.status(500).json({ error: "Failed to create user" });
    }
  }
  if(req.method === "GET"){
    const query = `*[_type == "user"]{
        _id,
        name,
        email,
        password,
        address,
        phone,
        city,
        }`;
  
  // If category is defined, pass it in the parameters object
  const user = await sanityClient.fetch(query);
  
  res.status(200).json(user);
}
  
  else {
  
    return res.status(405).json({ error: "Method not allowed!" });
  }
}
