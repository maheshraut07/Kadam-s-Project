import React from "react";
import { FaCircleDot } from "react-icons/fa6";
import { formatDate, statusColors } from "@/lib/utils";

const OrdersList = ({ filteredOrders }) => {
  console.log(filteredOrders);
  return (
    <div className="max-w-4xl mx-auto bg-transparent rounded-md ml-8">
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order._id}
            className="flex p-4 items-center bg-white border rounded-sm"
          >
            <img
              src={order.items[0].images[0]}
              alt={order.name}
              className="w-20 h-20 rounded-lg"
            />

            <div className="ml-4 flex-1">
              <h3 className="font-semibold text-md text-gray-800">
                {order.items.map((item) => item.name).join(", ")}
              </h3>
              <p className="font-semibold text-sm mt-1">
                ₹{order.totalPrice + order.deliveryCharge}
              </p>
            </div>

            <div className="text-right">
              <div
                className={`${
                  statusColors[order.status]
                } flex items-center gap-2`}
              >
                <FaCircleDot /> {order.status}
              </div>
              <p className="text-gray-500">
                {formatDate(new Date(order.updatedAt))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;
