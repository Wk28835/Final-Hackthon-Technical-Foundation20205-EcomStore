// components/PaymentForm.js
import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ clientSecret, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardholderName, setCardholderName] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!stripe || !elements) {
      setError("Stripe.js has not yet loaded.");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: cardholderName, // Use cardholder's name here
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(`Payment successful! PaymentIntent ID: ${paymentIntent.id}`);
    }
    setLoading(false);
  };

  return (
    <form className='mt-4' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardholder-name">Name on Card</label>
        <input
          type="text"
          id="cardholder-name"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          required
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />
      </div>
      <CardElement />
      <div className="mt-4">
        <span className="font-bold">Amount to Pay: ${amount/100}</span> {/* Display dynamic amount */}
      </div>
      <button type="submit" disabled={!stripe || loading} className="bg-green-500 text-white px-4 py-2 rounded">
        {loading ? 'Processing...' : 'Proceed Payment'}
      </button>
      {error && <div>{error}</div>}
      {success && <div>{success}</div>}
    </form>
  );
};

export default PaymentForm;
