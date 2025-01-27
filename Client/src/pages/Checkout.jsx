import AddressForm from "@/components/AddressForm";
import CartItem from "@/components/CartItem";
import Navbar from "@/components/shared/Navbar";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { user } = useSelector((store) => store.user);
  const { items, totalPrice } = useSelector((store) => store.cart);
  const navigate = useNavigate();

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [paymentMode, setPaymentMode] = useState("cod");

  const openAddressForm = () => {
    setShowAddressForm(true);
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully! Thank you for shopping with us.");
    navigate("/");
  };

  return (
    user && (
      <>
        <Navbar />
        <div className="max-w-4xl mx-auto shadow-md rounded-lg mt-6">
          <div>
            <h2 className="text-lg p-4 bg-green-500 text-white font-semibold">
              Shipping Address
            </h2>
            {showAddressForm ? (
              <AddressForm
                user={user}
                setShowAddressForm={setShowAddressForm}
              />
            ) : (
              <div className="px-4 py-2">
                <h4 className="text-sm font-semibold">
                  {user.name}, {user.mobile}
                </h4>
                {user.address ? (
                  <div className="bg-white flex justify-between items-start">
                    <p className="py-3 text-sm max-w-[450px]">
                      {`${user.address.area}, ${user.address.locality}, ${
                        user.address.city
                      }, ${user.address.state} - ${user.address.pincode}  ${
                        user.address.landmark &&
                        "Landmark: " + user.address.landmark + ", "
                      }  ${
                        user.address.alternatePhone &&
                        "Alternate Phone: " + user.address.alternatePhone
                      }`}
                    </p>
                    <button
                      className="border-[1px] text-sm font-medium text-sm border-green-400 py-2 px-5 rounded-sm"
                      onClick={openAddressForm}
                    >
                      Edit Address
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-row items-center w-full justify-between border-b-[1px] pb-2">
                    <p className="text-red-400">No address provided</p>
                    <button
                      className="border-[1px] text-sm font-medium text-sm border-green-400 py-2 px-5 rounded-sm"
                      onClick={openAddressForm}
                    >
                      NEW ADDRESS
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div>
            <h2 className="text-lg p-4 bg-green-500 text-white font-semibold">
              Payment Details
            </h2>
            <div className="py-2 px-4">
              <label className="flex items-center gap-2 text-sm font-semibold">
                <input
                  type="radio"
                  value="cod"
                  checked={paymentMode === "cod"}
                  onChange={(e) => setPaymentMode(e.target.value)}
                  className="form-radio"
                />
                Cash on Delivery
              </label>
              <p className="ml-5 py-3 text-sm">
                Currently, only Cash on Delivery is available.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg p-4 bg-green-500 text-white font-semibold">
              Order Summary
            </h2>
            <div className="mt-4 bg-white p-4 rounded shadow-sm">
              {items.map((item) => (
                <CartItem item={item} key={item._id} />
              ))}
              <hr className="my-2" />
              <div className="flex justify-between font-bold">
                <p>Total Price:</p>
                <p>₹{totalPrice}</p>
              </div>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Proceed to Place Order
          </button>
        </div>
      </>
    )
  );
};

export default Checkout;
