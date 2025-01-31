import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

interface PaymentFormProps {
  clientSecret: string;
  amount: number;
  onPaymentSuccess: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ clientSecret, amount, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardholderName, setCardholderName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
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
    if (!cardElement) {
      setError("Card element not found.");
      setLoading(false);
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: cardholderName, // Use cardholder's name here
          },
        },
      });

      if (error) {
        setError(error.message || "Payment failed.");
      } else if (paymentIntent) {
        setSuccess(`Payment successful! PaymentIntent ID: ${paymentIntent.id}`);
        onPaymentSuccess(); // Call the onPaymentSuccess callback after successful payment
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
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
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="mt-4">
        <span className="font-bold">Amount to Pay: ${amount / 100}</span>{" "}
        {/* Display dynamic amount */}
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Processing..." : "Proceed Payment"}
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {success && <div className="text-green-500 mt-2">{success}</div>}
    </form>
  );
};

export default PaymentForm;
