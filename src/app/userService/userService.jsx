"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

import { useApplicationContext } from "@/app/context/ApplicationContext";

import {
  loginRequest,
  createAccountRequest,
  protectedRequest,
} from "../../../services/services";

export default function UserService() {
  const router = useRouter();
  const { crendential, setIsLoading, newUserCrendential } =
    useApplicationContext();

  const login = async () => {
    try {
      setIsLoading(true);
      const response = await loginRequest(crendential);
      if (response.status == 200) {
        toast.success(response.data.message);
        setIsLoading(false);
        router.push("./movies");
        return response.data;
      } else {
        toast.error(response.data.message);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message ?? "Something Went Wrong");
      setIsLoading(false);
    }
  };

  const createAccount = async () => {
    try {
      setIsLoading(true);
      const response = await createAccountRequest(newUserCrendential);
      if (response.status == 201) {
        toast.success("Account created successfully!");
        setIsLoading(false);
      } else {
        toast.error(response.data.message);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Something Went Wrong");
    }
  };
  const protectedRoute = async () => {
    try {
      const response = await protectedRequest();
      debugger;
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    login,
    createAccount,
    protectedRoute,
  };
}
