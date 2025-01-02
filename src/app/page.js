import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const Login = dynamic(() => import("@/app/components/Login"));

export default function Home() {
  return (
    <>
      <Login />
    </>
  );
}
