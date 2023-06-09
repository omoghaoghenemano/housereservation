import React from "react";
import Header from "@/components/header";
import Body from "../components/Body";
import Footer from "@/components/Footer";

type Props = {};

export default function index({}: Props) {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}
