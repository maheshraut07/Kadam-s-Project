import ordersApi from "@/api/modules/api.order";
import AddressForm from "@/components/AddressForm";
import CartItem from "@/components/CartItem";
import Navbar from "@/components/shared/Navbar";
import Loader from "@/components/ui/Loader";
import { clearCart } from "@/store/functions/cart";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const { user } = useSelector((store) => store.user);
  const { items, totalPrice, deliveryCharge } = useSelector(
    (store) => store.cart
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [paymentMode, setPaymentMode] = useState("cod");

  const openAddressForm = () => {
    setShowAddressForm(true);
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log({ items, totalPrice, deliveryCharge });
    const { response, error } = await ordersApi.placeOrder({
      items,
      totalPrice,
      deliveryCharge,
    });
    if (response) {
      toast.success(response.message);
      dispatch(clearCart());
      navigate("/");
    }
    if (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    user && (
      <>
        <Loader loading={loading} />
        <Navbar />
        <div className="max-w-[950px] w-full relative pb-8 mx-auto shadow-md rounded-md mt-6 ">
          {/* Address */}
          <div>
            <h2 className="text-lg p-4 bg-gray-600 text-white font-semibold">
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
            <h2 className="text-lg p-4 bg-gray-600 text-white font-semibold">
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

          {/* Payment */}
          <div className="mb-10">
            <h2 className="text-lg p-4 bg-gray-600  text-white font-semibold">
              Order Summary
            </h2>
            <div className="mt-4 bg-white p-4 gap-4 rounded shadow-sm flex max-h-[40vh] overflow-y-scroll hide-scrollbar">
              <div className="w-[70%]">
                {items.map((item) => (
                  <CartItem item={item} key={item._id} checkoutPage />
                ))}
              </div>
              <div className="w-[30%]">
                <p className="text-lg font-semibold text-gray-600">
                  PRICE DETAILS
                </p>
                <ul className="border-y-[1px] w-full my-2">
                  <li className="flex py-2 justify-between">
                    <p>Price: </p> <p>₹ {totalPrice}</p>
                  </li>
                  <li className="flex py-2 justify-between">
                    <p>Delivery Charges: </p> <p>₹ {deliveryCharge}</p>
                  </li>
                  <b>
                    <li className="flex py-2 justify-between border-y-[1px]">
                      <p>Total amount:</p>
                      <p>₹ {totalPrice + deliveryCharge}</p>
                    </li>
                  </b>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="w-full flex justify-end p-4 sticky bottom-0 bg-white shadow-md">
            <button
              onClick={handlePlaceOrder}
              className="w-[10rem] px-6 py-3 font-semibold bg-green-500 text-white rounded-sm hover:bg-green-600"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </>
    )
  );
};

export default Checkout;
