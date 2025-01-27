import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import { Button } from "../components/ui/button";
import { getNextSaturday, sendMessage } from "@/lib/utils";

const GrapesDetails = () => {
  const location = useLocation();
  const item = location.state;

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        <p>Product details not found!</p>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(item.images[0]);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleBuyNow = () => {
    // sendMessage();
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 flex items-center h-[90vh] w-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <div className="flex flex-col items-center">
            <img
              src={selectedImage}
              alt={item.name}
              className="w-full h-80 object-contain rounded-lg shadow-lg"
            />
            <div className="flex mt-4 gap-2">
              {item.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery ${index}`}
                  className={`${
                    selectedImage === img && "border-2 border-green-400"
                  } w-16 h-16 object-cover rounded-md shadow-sm cursor-pointer hover:scale-105 transition-transform`}
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800">{item.name}</h1>
            <p className="text-xl font-semibold text-gray-700 mt-2">
              ₹ {item.price}
            </p>
            <p className="text-gray-600 mt-4">{item.description}</p>
            <p className="text-green-600 font-semibold mt-4">In Stock</p>
            <p>
              Delivery Expected by <b>{getNextSaturday()}</b>
            </p>
            <div className="mt-6 flex gap-4">
              <Button
                className="bg-[#3C3838] text-white py-2 px-6 rounded hover:bg-black transition duration-200 w-1/2 mt-4"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrapesDetails;
