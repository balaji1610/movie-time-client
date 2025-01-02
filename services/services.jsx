import axios from "axios";

export const loginRequest = async (crendential) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_LOGIN_API_ENDPOINT}`,
    crendential
  );
  return response;
};
export const createAccountRequest = async (newUser) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_CREATE_ACCOUNT_ENDPOINT}`,
    newUser
  );
  return response;
};

export const protectedRequest = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_PROTECTED_ENDPOINT}`
  );
  return response;
};
