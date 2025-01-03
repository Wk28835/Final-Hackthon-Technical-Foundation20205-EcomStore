import  client  from "@/sanity/lib/client"; // Replace with your configured Sanity client


export default async function handler(req, res) {
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
  } else {
  
    return res.status(405).json({ error: "Method not allowed!" });
  }
}
