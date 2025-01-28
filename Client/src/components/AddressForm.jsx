import ordersApi from "@/api/modules/api.order";
import { setUser } from "@/store/functions/user";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Loader from "./ui/Loader";

const AddressForm = ({ user, setShowAddressForm }) => {
  const dispatch = useDispatch();

  const [address, setAddress] = useState({
    pincode: user?.address.pincode,
    locality: user?.address.locality,
    area: user?.address.area,
    city: user?.address.city,
    state: user?.address.state,
    landmark: user?.address.landmark,
    alternatePhone: user?.address.alternatePhone,
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSaveAddress = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { response, error } = await ordersApi.updateAdress(address);
    if (response) {
      toast.success(response.message);
      dispatch(setUser(response.user));
    }
    if (error) {
      toast.error(error.message);
    }
    setTimeout(() => {
      setLoading(false);
      setShowAddressForm(false);
      window.location.reload();
    }, 1000);
  };

  return (
    <form onSubmit={handleSaveAddress} className="w-full px-6 rounded-lg my-2">
      <h1 className="text-md font-semibold mb-6">Edit Address</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={user?.name}
            disabled
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Full Name"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            10-digit mobile number
          </label>
          <input
            type="tel"
            disabled
            name="mobile"
            value={user?.mobile}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Mobile Number"
            pattern="[0-9]{10}"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Pincode
          </label>
          <input
            type="text"
            name="pincode"
            value={address.pincode}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Pincode"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Locality
          </label>
          <input
            type="text"
            name="locality"
            value={address.locality}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Locality"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Address (Area and Street)
          </label>
          <textarea
            name="area"
            value={address.area}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Address (Area and Street)"
            rows="3"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Village/Town/City
          </label>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="City/District/Town"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            District
          </label>
          <select
            name="state"
            value={address.state}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select District</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Gujarat</option>
            <option value="Delhi">Madhya Pradesh</option>
            <option value="Uttar Pradesh">Karnataka</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Landmark (Optional)
          </label>
          <input
            type="text"
            name="landmark"
            value={address.landmark}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Landmark"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Alternate Phone (Optional)
          </label>
          <input
            type="tel"
            name="alternatePhone"
            value={address.alternatePhone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Alternate Phone"
            pattern="[0-9]{10}"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 px-6 py-2 bg-black text-white text-sm rounded-sm hover:bg-gray-700 transition duration-200"
      >
        Save Address
      </button>
      <Loader loading={loading} />
    </form>
  );
};

export default AddressForm;
