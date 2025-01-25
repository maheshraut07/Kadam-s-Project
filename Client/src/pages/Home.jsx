import React, { useEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import HeroSection from "../components/HeroSection";
import Grapes from "../components/Grapes";
import itemsApi from "@/api/modules/api.item";
import { toast } from "react-toastify";
import Loader from "@/components/ui/Loader";

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const getAllItems = async () => {
      const { response, error } = await itemsApi.getItems();
      if (response) {
        setItems(response.items);
        // console.log(response);
      }
      if (error) {
        toast.error(error.message);
      }
    };

    getAllItems();
  }, []);

  return (
    <div className="text-[#3C3838] relative pb-40 min-h-[150vh]">
      <Navbar />
      <HeroSection />
      <Grapes items={items} />
      <Footer />
      <Loader loading={!items} />
    </div>
  );
};

export default Home;
