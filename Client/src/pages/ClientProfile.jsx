import ordersApi from "@/api/modules/api.order";
import Navbar from "@/components/shared/Navbar";
import { Avatar } from "@/components/ui/avatar";
import { UserIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { Search } from "lucide-react";
import OrdersList from "@/components/OrdersList";

function ClientProfile() {
  const { user } = useSelector((store) => store.user);

  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { response } = await ordersApi.getOrders();
        setOrders(response.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex bg-gray-100 min-h-screen">
        <div className="w-1/4 h-fit m-4 shadow-md rounded-sm p-4 border-r border-gray-200 bg-white">
          {user && (
            <>
              <div className="flex items-center gap-4">
                <Avatar className="cursor-pointer bg-[#14e35c] text-white flex items-center justify-center">
                  <UserIcon className="h-6 w-6 text-white" />
                </Avatar>
                <div>
                  <p className="text-[13px]">Hello,</p>
                  <p className="font-semibold">{user.name}</p>
                </div>
              </div>
              <div className="my-2 flex flex-col gap-2">
                <div className="flex gap-4">
                  <MdEmail className="text-xl text-gray-600" />
                  <p className="text-sm">{user.email}</p>
                </div>
                <div className="flex gap-4">
                  <FaPhone className="text-lg text-gray-600" />
                  <p className="text-sm">{user.mobile}</p>
                </div>
                <div className="flex gap-4 text-2xl">
                  <FaMapLocationDot className="text-xl text-gray-600" />
                  <p className="text-sm max-w-[80%]">{`${user.address.locality}, ${user.address.area}, ${user.address.landmark} ${user.address.city}, ${user.address.state}, ${user.address.pincode}`}</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="my-4 w-3/5">
          <div className="flex items-center rounded-lg mb-4">
            <Search className="text-gray-500 mr-2 relative left-[3rem]" />
            <input
              type="text"
              placeholder="Search your orders here"
              className="flex-1 p-2 pl-12 outline-none border-[1px] rounded-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-green-500 text-white rounded-r-sm px-4 py-2 hover:bg-green-600">
              Search Orders
            </button>
          </div>
          {orders && <OrdersList filteredOrders={orders} />}
        </div>
      </div>
    </>
  );
}

export default ClientProfile;
