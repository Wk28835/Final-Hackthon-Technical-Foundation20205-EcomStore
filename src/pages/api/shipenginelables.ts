import { NextApiRequest, NextApiResponse } from "next";
import shipEngine from "../../../lib/shipengine"; // Assuming the ShipEngine library is set up

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const shipment = {
      service_code: "usps_priority_mail", // Replace with a valid service code
      ship_to: {
        name: req.body.name,
        address_line1: req.body.address_line1,
        address_line2: req.body.address_line2 || null,
        city_locality: req.body.city_locality,
        state_province: req.body.state_province,
        postal_code: req.body.postal_code,
        country_code: req.body.country_code || "US",
        phone: req.body.phone,
        email: req.body.email,
      },
      ship_from: {
        name: "WASEEM KHAN",
        company_name: "Nike Fashioners",
        address_line1: "123 street ",
        address_line2: null,
        city_locality: "Austin",
        state_province: "TX",
        postal_code: "78701",
        country_code: "US",
        phone: "512-555-5555",
        email: "wk@example.com",
      },
      packages: [
        {
          weight: {
            value: 1.5, // Replace with actual weight
            unit: "ounce", // Use "ounce" or "pound"
          },
          dimensions: {
            length: 6, // Replace with actual length
            width: 4,  // Replace with actual width
            height: 2, // Replace with actual height
            unit: "inch", // Use "inch" or "centimeter"
          },
        },
      ],
    };

    console.log("Check shipment object:", shipment);

    try {
      const response = await shipEngine.post("/labels", {
        shipment,
        label_format: "pdf", // Choose "pdf", "png", or other supported formats
      });

      res.status(200).json(response.data); // Return the label details
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error creating label:", error.message);
        res.status(500).json({ error: error.message });
      } else {
        console.error("Unknown error:", error);
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
