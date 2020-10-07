import React from "react";
import Header from "../header";
export default function PageDefault({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
