import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";
import Header from "./Components/Headder/Headder";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Body />
      {/* <ShoppingCart /> can be used to open the shopping cart sheet */}
      {/* <SheetDemo /> can be used to demonstrate the sheet functionality */}
      <Footer/>
    </div>
  );
}
