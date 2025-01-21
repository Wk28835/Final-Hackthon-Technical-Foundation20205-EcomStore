// pages/api/login.js
import sanityClient from '@/sanity/lib/client';

import { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  try {
    // Find the user with the provided email
    const user = await sanityClient
      .fetch('*[_type == "user" && email == $email]', { email })
      .then((data) => data[0]);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Directly compare the password (NOT recommended for production)
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Send back user info (excluding sensitive data) on successful login
    res.status(200).json({ email: user.email, id: user._id });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
