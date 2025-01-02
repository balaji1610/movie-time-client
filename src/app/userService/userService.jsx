import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

import { useApplicationContext } from "@/app/context/applicationContext";

import { loginRequest } from "../../../services/services";

export default function UserService() {
  const { crendential, setIsLoading } = useApplicationContext();

  const login = async () => {
    try {
      setIsLoading(true);
      const response = await loginRequest(crendential);
      if (response.status == 200) {
        toast.success(response.data.message);
        setIsLoading(false);
        return response.data;
      } else {
        toast.error(response.data.message);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message ?? "Something Went Wrong");
      setIsLoading(false);
      console.error(error);
    }
  };

  return {
    login,
  };
}
