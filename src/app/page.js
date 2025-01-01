"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateName } from "@/app/store/slices/userSlice"; // Import the action
export default function Home() {
  const dispatch = useDispatch();
  const { userDetail } = useSelector((state) => state.user);

  const AddClick = () => {
    const result = { ...userDetail, name: "vv" };
    dispatch(updateName(result));
  };

  return (
    <div>
      <h1>{userDetail.name}</h1>
      <button onClick={AddClick}>Add</button>
    </div>
  );
}
