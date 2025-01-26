import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [product, setProducts] = useState<Cart[]>([]);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const shipment = {
      name: `${formData.first_Name} ${formData.last_Name}`,
      address_line1: formData.address_1,
      address_line2: formData.address_2,
      city_locality: formData.city,
      postal_code: formData.postal_code,
      phone: formData.phone,
      email: formData.email,
    };
    try {
      const response = await fetch("http://localhost:3000/api/shipenginelables", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shipment),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("Form submitted successfully!");
      
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting the form.");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/cart");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Cart[] = await res.json();
        setProducts(data);
        console.log("check data", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const calculateSubtotal = () => {
    let subTotal = 0;
    product.forEach((item) => {
      subTotal += item.price * item.quantity;
    });
    return subTotal;
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="max-w-4xl flex gap-10">
        {/* Left Section */}
        <section className="w-1/2 space-y-4">
          <h1 className="text-xl font-medium">
            How would you like to get your order?
          </h1>
          <p className="text-gray-500 text-sm leading-6">
            Customs regulation for India require a copy of the recipient's KYC.
            The address on the KYC needs to match the shipping address. Our
            courier will contact you via SMS/email to obtain a copy of your KYC.
            The KYC will be stored securely and used solely for the purpose of
            clearing customs (including sharing it with customs officials) for
            all orders and returns. If your KYC does not match your shipping
            address, please click the link for more information. Learn More
          </p>
          <div className="flex items-center gap-4 border-2 border-black rounded-lg p-4">
            <ShoppingBag className="w-6 h-6" />
            <button
              className="text-sm font-medium text-center"
              onClick={handleSubmit}
            >
              Deliver It
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <p className="font-bold text-sm">Enter your name and address:</p>
            <input
              className="border placeholder:text-black rounded px-4 py-2 w-full"
              name="first_Name"
              value={formData.first_Name}
              onChange={handleChange}
              placeholder="First Name"
            />
            <input
              className="border placeholder:text-black rounded px-4 py-2 w-full"
              name="last_Name"
              value={formData.last_Name}
              onChange={handleChange}
              placeholder="Last Name"
            />
            <input
              className="border placeholder:text-black rounded px-4 py-2 w-full"
              name="address_1"
              value={formData.address_1}
              onChange={handleChange}
              placeholder="Address Line 1"
            />
            <p className="text-gray-400 text-xs">We do not ship to P.O. boxes</p>
            <input
              className="border placeholder:text-black rounded px-4 py-2 w-full"
              name="address_2"
              value={formData.address_2}
              onChange={handleChange}
              placeholder="Address Line 2"
            />
            <div className="flex gap-2">
              <input
                className="border placeholder:text-black rounded px-4 py-2 w-full"
                name="postal_code"
                value={formData.postal_code}
                onChange={handleChange}
                placeholder="Postal Code"
              />
              <input
                className="border placeholder:text-black rounded px-4 py-2 w-full"
                placeholder="Locality"
              />
            </div>
            <select className="border rounded px-4 py-2 w-full">
              <option>State</option>
              <option>Territory</option>
            </select>
            <input
              className="border placeholder:text-black rounded px-4 py-2 w-full"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
            />
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p className="text-sm ml-2">Save this address to my profile</p>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p className="text-sm ml-2">
                I have read and consent to eShopWorld processing my information
                in accordance with the Privacy Statement and Cookie Policy.
              </p>
            </div>
            <button
              type="submit"
              className="bg-gray-100 w-full py-3 rounded-full font-medium text-center"
            >
              Continue
            </button>
          </form>
        </section>

        {/* Right Section */}
        <section className="w-1/2">
          <h1 className="font-medium text-xl">Order Summary</h1>
          <div className="mt-4">
            <p className="text-gray-600 text-sm">SubTotal</p>
            <p className="text-gray-500 text-sm mt-2">₹ {calculateSubtotal()}</p>
            <p className="text-gray-500 text-sm mt-4">Delivery/Shipping</p>
            <p className="text-gray-600 text-sm mt-2">Free</p>
            <div className="border-t mt-4 pt-2">
              <p className="text-sm">Total</p>
              <p className="text-gray-600 text-sm mt-2">₹{calculateSubtotal()}</p>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              (The total reflects the price of your order, including all duties
              and taxes)
            </p>
          </div>
          {product.map((item) => (
            <div key={item._id} className="flex items-center mt-4">
              <Image
                className="rounded"
                width={100}
                height={100}
                alt="product"
                src={item.image}
              />
              <div className="ml-4">
                <h1 className="font-bold text-sm">{item.title}</h1>
                <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                <p className="text-gray-400 text-sm">Size: {item.size}</p>
                <p className="text-gray-400 text-sm">₹ {item.price}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Checkout;
