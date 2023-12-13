import "../App.css";
import { NavbarComponent, CardProductComponent } from "../components/index.js";
import { useState } from "react";

export default function HomePage() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <br />
        <br />
        <h1>Selamat datang di Website Sayur Segar</h1>
        <h5>Jangan lupa register dan login untuk berbelanja yaa</h5>
        <h6>Selamat berbelanja!</h6>
        <br />
        <br />
      </div>
      <NavbarComponent />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardProductComponent />
        <CardProductComponent />
        <CardProductComponent />
        <CardProductComponent />
        <CardProductComponent />
        <CardProductComponent />
        <CardProductComponent />
        <CardProductComponent />
      </div>
    </>
  );
}
