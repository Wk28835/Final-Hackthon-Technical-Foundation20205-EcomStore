import { NextApiRequest, NextApiResponse } from 'next';
import shipEngine from '../../../lib/shipengine'; // Import your lib function

interface Address {
  name: string;
  street1: string;
  city: string;
  state: string;
  postal_code: string;
  country_code: string;
}

interface PackageDetails {
  weight: {
    value: number;
    unit: string;
  };
  dimensions: {
    unit: string;
    length: number;
    width: number;
    height: number;
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { fromAddress, toAddress, packageDetails } = req.body as {
      fromAddress: Address;
      toAddress: Address;
      packageDetails: PackageDetails;
    };

    try {
      const response = await shipEngine.post('/rates', {
        shipment: {
          validate_address: 'no_validation',
          ship_to: toAddress,
          ship_from: fromAddress,
          packages: [packageDetails],
        },
      });

      res.status(200).json(response.data);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        console.error('Unknown error:', error);
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
