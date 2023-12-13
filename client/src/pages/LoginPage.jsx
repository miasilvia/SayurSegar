import "../App.css";
import { NavbarComponent, FormLoginComponent } from "../components/index.js";
import { useState } from "react";

export default function LoginPage() {
  return (
    <>
      <NavbarComponent />
      <FormLoginComponent />
    </>
  );
}
