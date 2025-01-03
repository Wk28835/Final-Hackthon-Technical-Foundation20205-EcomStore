import React, { useState } from "react";
import Image from "next/image";

const Joinus: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    address: "",
    city: "",
    phone: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Account created successfully!");
        setFormData({
          email: "",
          password: "",
          name: "",
          address: "",
          city: "",
          phone: "",
        });
      } else {
        setErrorMessage(data.error || "Failed to create account.");
      }
    } catch (error) {
      console.error("An error occurred:", error); // Logs error details for debugging
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center mt-2 h-full bg-gray-50">
      <section className="w-[380px] h-[830px] relative">
        <div className="w-[324px] h-[128px] relative mx-auto">
          <Image className="ml-5" alt="Nike Logo" width={324} height={17} src="/nike3.png" />
          <div className="w-[324px] h-[182px] mt-4 relative">
            <h1 className="text-center font-bold text-[18px] leading-[26px]">
              BECOME A NIKE MEMBER
            </h1>
            <p className="text-gray-600 text-center text-[14px] leading-[22px] mt-2">
              Create your Nike Member profile and get<br /> first access to the very best of Nike<br /> products
              inspiration and community.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative mx-auto mt-4">
          <div className="flex flex-col gap-3">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 w-[324px] h-[40px] rounded-[3px] px-2"
              placeholder="Email address"
            />
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 w-[324px] h-[40px] rounded-[3px] px-2"
              placeholder="Password"
              type="password"
            />
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 w-[324px] h-[40px] rounded-[3px] px-2"
              placeholder="Name"
            />
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-gray-300 w-[324px] h-[40px] rounded-[3px] px-2"
              placeholder="Address"
            />
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border border-gray-300 w-[324px] h-[40px] rounded-[3px] px-2"
              placeholder="City"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 w-[324px] h-[40px] rounded-[3px] px-2"
              placeholder="Phone"
            />
          </div>

          <div className="flex items-center mt-4">
            <input
              className="border border-gray-400 w-[28px] h-[28px] rounded-[3px]"
              type="checkbox"
            />
            <p className="text-gray-400 text-[11px] leading-[14px] ml-4">
              Sign up for emails to get updates from Nike on<br /> products, offers, and your Member benefits.
            </p>
          </div>

          <p className="text-gray-400 text-[12px] leading-[16px] text-center mt-4">
            By creating an account, you agree to Nike&#39;s Privacy Policy and Terms of Use.
          </p>

          <button
            type="submit"
            className="bg-black text-white w-[324px] h-[40px] rounded mt-4 text-center text-[15px] leading-[17px] flex items-center justify-center"
          >
            JOIN US
          </button>
        </form>

        {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}

        <p className="text-center mt-4">
          Already a Member?{" "}
          <button
            onClick={() => (window.location.href = "/login")}
            className="underline text-black"
          >
            Sign In.
          </button>
        </p>
      </section>
    </div>
  );
};

export default Joinus;
