import axios from "axios";

export const loginRequest = async (crendential) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_LOGIN_API_ENDPOINT}`,
    crendential
  );
  return response;
};
