"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateName,
  fetchUserDetailsThunk,
} from "@/app/store/slices/userSlice";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const { userDetail, portectedMessage, status } = useSelector(
    (state) => state.user
  );

  const AddClick = () => {
    const result = { ...userDetail, name: "vv" };
    dispatch(updateName(result));
  };
  useEffect(() => {
    dispatch(fetchUserDetailsThunk());
  }, []);

  console.log(portectedMessage);
  return (
    <div>
      <h1>{userDetail.name}</h1>
      <button onClick={AddClick}>ADD</button>

      <h1>{status == "succeeded" && portectedMessage.message}</h1>
    </div>
  );
}
