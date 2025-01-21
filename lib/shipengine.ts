import axios from 'axios';

const SHIPENGINE_API_KEY = 'TEST_fRoGOFgWhoqAQlWzzenY9MjEBOQd6F+X6e0fo1YyDZA';

if (!SHIPENGINE_API_KEY) {
  throw new Error('Missing SHIPENGINE_API_KEY environment variable');
}

// Create an instance of Axios configured for ShipEngine
const shipEngine = axios.create({
  baseURL: 'https://api.shipengine.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'API-Key': 'TEST_fRoGOFgWhoqAQlWzzenY9MjEBOQd6F+X6e0fo1YyDZA',
  },
});

export default shipEngine;
