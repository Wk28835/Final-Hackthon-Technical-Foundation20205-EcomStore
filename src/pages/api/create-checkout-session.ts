import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51PjmlAI1ZwiCwOOmfzFmotixEafHmjCKduNgHUKEQG69lmHgJeQiYhiJcxdQHV3vePVXnFfC54rS9UskTZCpz3SH00OEYq3L5Q");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { amount } = req.body;

      if (!amount) {
        return res.status(400).json({ error: "Amount is Required!" });
      }

      const origin = req.headers.origin || "http://localhost:3000";

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "inr",
              product_data: {
                name: "Your Product Name",
              },
              unit_amount: amount, // Amount in paise (e.g., 100 INR = 10000 paise)
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${origin}/checkout?success=true`,
        cancel_url: `${origin}/checkout?canceled=true`,
      });

      res.status(200).json({ id: session.id });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      res.status(500).json({ error: errorMessage });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
