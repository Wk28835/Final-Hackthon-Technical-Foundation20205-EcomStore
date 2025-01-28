// pages/api/create-payment-intent.js
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe("sk_test_51PjmlAI1ZwiCwOOmfzFmotixEafHmjCKduNgHUKEQG69lmHgJeQiYhiJcxdQHV3vePVXnFfC54rS9UskTZCpz3SH00OEYq3L5Q");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
     // Extract amount from the request body
     const { amount } = req.body; 
    const currency='usd';

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency, // Change currency as needed
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
      
    } catch (error) {
      res.status(500).json({ error: "failed to proceed!" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
