import "../App.css";
import { NavbarComponent, FormRegisterComponent } from "../components/index.js";
import { useState } from "react";
export default function RegisterUserPage() {
  return (
    <>
      <NavbarComponent />
      <FormRegisterComponent />
    </>
  );
}
