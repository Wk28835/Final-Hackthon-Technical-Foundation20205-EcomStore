import { createLabel } from "../../../utils/labelGenerator";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { orderId } = req.body;

    
    const labelBuffer = await createLabel(orderId);

    // Set the headers for the file download
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="label-${orderId}.pdf"`);
    res.status(200).send(labelBuffer);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
