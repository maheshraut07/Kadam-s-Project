import privateClient from "../private.client";

const endpoints = {
  updateAdress: "/orders/update-address",
  placeOrder: "/orders/new-order",
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
  placeOrder: async (order) => {
    try {
      const response = await privateClient.post(endpoints.placeOrder, order);
      return { response };
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
};

export default ordersApi;
