import privateClient from "../private.client";

const endpoints = {
  updateAdress: "/orders/update-address",
};

const ordersApi = {
  updateAdress: async (address) => {
    try {
      const response = await privateClient.put(endpoints.updateAdress, address);
      return { response };
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
};

export default ordersApi;
