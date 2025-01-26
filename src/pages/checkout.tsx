import { ShoppingBag } from "lucide-react";
import Image from "next/image";


import { useState } from "react";

const Checkout: React.FC = () => {
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

  return (
    <div>
      <div className="parent_div flex" style={{ width: "880px", height: "650px", left: "289px", position: "relative" }}>
        <section style={{ width: "440px", height: "200px", top: "2px", position: "relative" }}>
          <h1 className="text-xl font-medium" style={{ width: "379px", height: "24px", top: "70px", position: "relative" }}>
            How would you like to get your order?
          </h1>

          <p className="text-gray-500 text-sm leading-6" style={{ width: "437.61px", height: "192px", top: "80px", position: "relative" }}>
            Customs regulation for India require a copy of the <br />
            recipient&#39;s KYC. The address on the KYC needs to match the shipping
            address. Our courier will contact you via SMS/email to obtain
            a copy of your KYC. The KYC will be stored securely and
            used solely for the purpose of clearing customs (including
            sharing it with customs officials) for all orders and returns. If
            your KYC does not match your shipping address, please click
            the link for more information. Learn More
          </p>

          <div className="gap-6 flex border-black" style={{ width: "440px", height: "82px", top: "109px", borderRadius: "12px", borderWidth: "2px", position: "relative", paddingTop: "29px", paddingBottom: "29px", paddingLeft: "21px", paddingRight: "307px" }}>
            <ShoppingBag width={21.85} height={19.02} style={{ paddingTop: "1.23", paddingLeft: "1.11", position: "relative" }} />

            <button className="text-center" onClick={handleSubmit} style={{ width: "64px", height: "24px", position: "relative", fontWeight: "500", fontSize: "15px", lineHeight: "24px" }}>
              Deliver It
            </button>
          </div>

          <div style={{ width: "440px", height: "800px", top: "130px", position: "relative", paddingTop: "20px", paddingBottom: "8px", gap: "28px" }}>
            <p className="font-bold text-sm" style={{ width: "300px", height: "24px", position: "relative", fontSize: "15px", lineHeight: "24px" }}>
              Enter your name and address:
            </p>

            <input className="border placeholder:text-black rounded px-4 py-4 w-full" name="first_Name" value={formData.first_Name} onChange={handleChange} placeholder="First Name" />

            <input className="border placeholder:text-black rounded px-4 py-4 w-full mt-2" name="last_Name" value={formData.last_Name} onChange={handleChange} placeholder="Last Name" />

            <input className="border placeholder:text-black rounded px-4 py-4 w-full mt-2" name="address_1" value={formData.address_1} onChange={handleChange} placeholder="Address Line 1" />

            <p className="text-gray-400 text-xs mt-1">We do not ship to P.O. boxes</p>

            <input className="border placeholder:text-black rounded px-4 py-4 w-full mt-2" name="address_2" value={formData.address_2} onChange={handleChange} placeholder="Address Line 2" />

            <div className="flex gap-2">
              <input className="border placeholder:text-black rounded px-4 py-4 w-full" name="postal_code" value={formData.postal_code} onChange={handleChange} placeholder="Postal Code" />
              <input className="border placeholder:text-black rounded px-4 py-4 w-full" placeholder="Locality" />
            </div>

            <select className="border placeholder:text-gray-600 rounded px-4 py-4 w-full mt-2">
              <option>State</option>
              <option>Territory</option>
            </select>

            <input className="border placeholder:text-black rounded px-4 py-4 w-full mt-2" name="city" value={formData.city} onChange={handleChange} placeholder="City" />

            <div className="flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4" />
              <p className="text-sm ml-2">Save this address to my profile</p>
            </div>

            <div className="flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4" />
              <p className="text-sm ml-2">I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy.</p>
            </div>

            <button className="bg-gray-100 w-full py-4 rounded-full mt-4 font-medium text-center">
              Continue
            </button>
          </div>
        </section>

        <section style={{ width: "320px", height: "721px", left: "130px", position: "relative", top: "8px" }}>
          <h1 className="font-medium text-xl" style={{ width: "160.37px", height: "26px", top: "67px", fontSize: "21px", lineHeight: "24px", position: "relative" }}>
            Order Summary
          </h1>

          <p className="text-gray-600 text-sm mt-16">SubTotal</p>
          <p className="text-gray-500 text-sm mt-2">₹ 20 890.00</p>

          <p className="text-gray-500 text-sm mt-4">Delivery/Shipping</p>
          <p className="text-gray-600 text-sm mt-2">Free</p>

          <div className="border-t mt-4 pt-2">
            <p className="text-sm">Total</p>
            <p className="text-gray-600 text-sm mt-2">₹ 20 890.00</p>
          </div>

          <p className="text-xs text-gray-600 mt-2">(The total reflects the price of your order, including all duties and taxes)</p>

          <div style={{ width: "320px", height: "474px", left: "3px", top: "20px", position: "relative" }}>
            <h1 className="font-bold text-sm" style={{ width: "249px", height: "24px", left: "3px", position: "relative", fontSize: "15px", lineHeight: "24px" }}>
              Arrives Mon, 27 Mar - Wed, 12 Apr
            </h1>

            <Image className="top-2 relative" width={208} height={208} alt="image" src="/boy8.jpeg" />

            <h1 className="font-normal text-sm mt-2" style={{ width: "85.53px", height: "120px", top: "-203px", left: "220px", position: "relative" }}>
              Nike Dri-FIT ADV TechKnit Ultra Men&#39;s Short-Sleeve Running Top
            </h1>

            <p className="text-gray-400 text-sm bottom-24 relative">Qty 1</p>
            <p className="text-gray-400 text-sm bottom-24 relative">Size L</p>
            <p className="text-gray-400 text-sm bottom-24 relative">₹ 3 895.00</p>
          </div>
        </section>
      </div>

      
    </div>
  );
};

export default Checkout;
