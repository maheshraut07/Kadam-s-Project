import publicClient from "../private.client";

const endpoints = {
  register: "/auth/register",
  login: "/auth/login",
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
};

export default authApi;
