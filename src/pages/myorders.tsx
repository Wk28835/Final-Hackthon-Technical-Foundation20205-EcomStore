import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import Image from "next/image";

interface Order {
  _id: string;
  name: string;
  email: string;
  phone: number;
  address: string;
  product_title: string;
  price: number;
  quantity: number;
  colors: string;
  size: string;
  image: string;
  category: string;
  status: string;
  slug?: { current: string };
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const router = useRouter();
  const user = getCookie("user") as string | undefined;

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }
    const userdata = JSON.parse(user);
    const email = userdata.email;

    const fetchOrders = async () => {
      try {
        const res = await fetch(`/api/orders?email=${email}`);
        if (!res.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data: Order[] = await res.json();
       console.log("check orders",data)
        setOrders(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">My Orders</h1>
      {Array.isArray(orders) && orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(orders) && orders.map((order) => (
            <div
              key={order._id}
              className="border rounded-lg shadow-md p-4 bg-white"
            >
              <Image
                src={order.image}
                alt={order.product_title}
                width={100}
                height={100}
                className="rounded-md mx-auto"
              />
              <h2 className="text-lg font-semibold mt-4">{order.product_title}</h2>
              <p className="text-sm text-gray-600">Category: {order.category}</p>
              <p className="text-sm text-gray-600">Size: {order.size}</p>
              <p className="text-sm text-gray-600">Color: {order.colors}</p>
              <p className="text-sm font-medium">Price: ₹{order.price}</p>
              <p className="text-sm font-medium">Quantity: {order.quantity}</p>
              <p className="text-sm font-medium">Total: ₹{order.price * order.quantity}</p>
              <hr className="my-2" />
              <p className="text-sm text-gray-700 font-medium">Customer Details:</p>
              <p className="text-sm text-gray-600">Email: {order.email}</p>
              <p className="text-sm text-gray-600">Phone: {order.phone}</p>
              <p className="text-sm text-gray-600">Address: {order.address}</p>
              <p
                className={`text-sm font-semibold mt-2 text-center py-1 rounded-md ${
                  order.status === "delivered"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                Status: {order.status}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
