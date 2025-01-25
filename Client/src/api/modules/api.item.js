import publicClient from "../public.client";

const endpoints = {
  getItems: "/items",
};

const itemsApi = {
  getItems: async () => {
    try {
      const response = await publicClient.get(endpoints.getItems);
      return { response };
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
  createItem: async (payload) => {
    try {
      const response = await publicClient.post(endpoints.getItems, payload);
      return { response };
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
};

export default itemsApi;
