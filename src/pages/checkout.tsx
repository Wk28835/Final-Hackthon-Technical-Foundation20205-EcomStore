import Image from "next/image";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { loadStripe } from "@stripe/stripe-js";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

interface Cart {
  _id: string;
  title: string;
  price: number;
  category: string;
  colors: string;
  quantity: number;
  size: string;
  status: string;
  image: string;
  slug?: { current: string };
}

const Checkout: React.FC = () => {
  const [products, setProducts] = useState<Cart[]>([]);
  const[showbuttons,setShowButtons]=useState(false);
  const [formData, setFormData] = useState({
    first_Name: "",
    last_Name: "",
    address_1: "",
    address_2: "",
    city: "",
    phone: "",
    email: "",
    postal_code: "",
  });
  const router = useRouter();

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Save order details to the backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.first_Name ||
      !formData.last_Name ||
      !formData.address_1 ||
      !formData.city ||
      !formData.phone ||
      !formData.email ||
      !formData.postal_code ||
      products.length === 0
    ) {
      toast.warn("Please fill in all required fields and add items to your cart.");
      return;
    }

    try {
      const orderItems = products.map((item) => ({
        productId: item._id,
        product_title: item.title,
        price: item.price,
        quantity: item.quantity,
        size: item.size,
        colors: item.colors,
        category: item.category,
        image: item.image,
      }));

      const orderData = {
        name: `${formData.first_Name} ${formData.last_Name}`,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.address_1}, ${formData.address_2}`,
        city: formData.city,
        postal_code: formData.postal_code,
      };

      const payload = {
        items: orderItems,
        orderData: orderData,
        total: calculateSubtotal(),
        status: "Pending",
      };

      console.log("Check payload before fetch:", payload);

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to save the order");
      }
      setShowButtons(true);
      // Order saved successfully
      toast.success("Delivery Details Submitted! Please Select Payment Method");


      // Clear form data (optional)
      setFormData({
        first_Name: "",
        last_Name: "",
        address_1: "",
        address_2: "",
        city: "",
        phone: "",
        email: "",
        postal_code: "",
      });
    } catch (error) {
      console.error("Error saving the order:", error);
      alert("There was an error saving your order.");
    }
  };

  // Create a payment intent and redirect to Stripe Checkout
  const handlePayment = async () => {
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: Math.round(calculateSubtotal() * 100) }), // Amount in paise
      });

      if (!response.ok) {
        throw new Error("Failed to create payment intent");
      }

      const { id } = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await loadStripe('pk_test_51PjmlAI1ZwiCwOOmKNKOu24TcCOmvdU27219vWbYjlitVTWXrskrayJSZ59A78PPjlCruREKncNQhq5R80zdp0XG00oy7aeGmT');
      await stripe?.redirectToCheckout({ sessionId: id });
    } catch (error) {
      console.error("Error creating payment intent:", error);
      toast.error("Failed to proceed to payment.");
    }
  };

  // Toggle showCard state
  const handleCod = () => {
    toast.success("Order Placed Success! You will be informed Shortly");
  };

  
  const user = getCookie("user") as string | undefined;
  // Fetch cart products on component mount
  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    const userdata = JSON.parse(user);
    
    const email = userdata.email;

    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/cart?email=${email}`);
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Cart[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Calculate subtotal
  const calculateSubtotal = () => {
    return products.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="flex justify-center items-center py-10">
      <ToastContainer />
      <div className="max-w-4xl flex gap-10">
        {/* Left Section */}
        <section className="w-1/2 space-y-4">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h1 className="text-xl font-medium">Delivery Details</h1>
            <input
              className="border rounded px-4 py-2 w-full"
              name="first_Name"
              value={formData.first_Name}
              onChange={handleChange}
              placeholder="First Name"
            />
            <input
              className="border rounded px-4 py-2 w-full"
              name="last_Name"
              value={formData.last_Name}
              onChange={handleChange}
              placeholder="Last Name"
            />
            <input
              className="border rounded px-4 py-2 w-full"
              name="address_1"
              value={formData.address_1}
              onChange={handleChange}
              placeholder="Address Line 1"
            />
            <input
              className="border rounded px-4 py-2 w-full"
              name="address_2"
              value={formData.address_2}
              onChange={handleChange}
              placeholder="Address Line 2"
            />
            <input
              className="border rounded px-4 py-2 w-full"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
            />
            <input
              className="border rounded px-4 py-2 w-full"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
              placeholder="Postal Code"
            />
            <input
              className="border rounded px-4 py-2 w-full"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
            <input
              className="border rounded px-4 py-2 w-full"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <button type="submit" className="bg-black text-white py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </section>

        {/* Right Section */}
        <section className="w-1/2">
          <h1 className="font-medium text-xl">Order Summary</h1>
          {products.map((item) => (
            <div key={item._id} className="flex items-center mt-4">
              <Image className="rounded" width={100} height={100} alt="product" src={item.image} />
              <div className="ml-4">
                <h1 className="font-bold text-sm">{item.title}</h1>
                <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                <p className="text-gray-400 text-sm">₹ {item.price}</p>
              </div>
            </div>
          ))}
          <div className="border-t mt-4 pt-2">
            <p className="text-sm">Subtotal: ₹{calculateSubtotal()}</p>
            <p>Delivery: Free</p>
            <p>Total: ₹{calculateSubtotal()}</p>
          </div>

         {showbuttons && ( <div className="right-24 relative"> <button
            onClick={handlePayment}
            className="px-4 my-4 py-2 mr-4 rounded-md left-64 bottom-14 relative bg-green-500"
          >
            Pay Now
          </button>

          <button
            onClick={handleCod}
            className="px-4 my-4 py-2 rounded-md left-64 bottom-14 relative bg-orange-500"
          >
            Cash On Delivery
          </button> 
          </div>)}

        </section>
      </div>
    </div>
  );
};

export default Checkout;
