import privateClient from "../private.client";
import publicClient from "../public.client";

const endpoints = {
  register: "/auth/register",
  login: "/auth/login",
  authenticate: "/auth/authenticate",
};

const authApi = {
  register: async (credentials) => {
    try {
      const response = await publicClient.post(endpoints.register, credentials);
      return { response };
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
  login: async (credentials) => {
    try {
      const response = await publicClient.post(endpoints.login, credentials);
      return { response };
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(endpoints.authenticate);
      return { response };
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
};

export default authApi;
