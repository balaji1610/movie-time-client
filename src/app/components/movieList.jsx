"use client";
import { useState, useEffect } from "react";
import userservice from "@/app/userService/userservice";

export default function MovieList() {
  const { protectedRoute } = userservice();

  useEffect(() => {
    protectedRoute();
  }, []);

  return (
    <>
      <h1>MovieList</h1>
    </>
  );
}
