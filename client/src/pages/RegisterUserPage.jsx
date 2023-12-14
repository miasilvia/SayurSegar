import "../App.css";
import {
  NavbarComponent,
  FormRegisterComponent,
  TableRegisterComponents,
} from "../components/index.js";
import { useState } from "react";
export default function RegisterUserPage() {
  const [dataUser, setDataUser] = useState([
    {
      id: 1,
      nama: "Mia",
      username: "Mia123",
      password: "1234",
      no_hp: "0875453535",
      email: "mia@gmail.com",
    },
    {
      id: 2,
      nama: "Minho",
      username: "Minho123",
      password: "1234",
      no_hp: "0875453536",
      email: "minho@gmail.com",
    },
  ]);
  return (
    <>
      <NavbarComponent />
      <div className="mt-5">
        <TableRegisterComponents dataUser={dataUser} />
      </div>
      <div className="mt-5">
        <FormRegisterComponent dataUser={dataUser} setDataUser={setDataUser} />
      </div>
    </>
  );
}
