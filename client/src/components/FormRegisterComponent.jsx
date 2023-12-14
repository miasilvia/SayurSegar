import { useState } from "react";

export default function FormRegisterComponent({ dataUser, setDataUser }) {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [no_hp, setNoHp] = useState("");
  const [email, setEmail] = useState("");

  const manipulDataUser = (inputUser) => {
    setDataUser((dataUser) => [...dataUser, inputUser]);
  };
  const handleAddDatUser = () => {
    const id = dataUser[dataUser.length - 1].id + 1;
    const inputUser = {
      id,
      nama,
      username,
      password,
      no_hp,
      email,
    };
    manipulDataUser(inputUser);
    console.log(handleAddDatUser);
  };

  return (
    <>
      <h1>Register Account User</h1>
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Nama Lengkap"
          aria-label="default input example"
          onChange={(e) => setNama(e.target.value)}
        />
        <br />
        <input
          className="form-control"
          type="text"
          placeholder="Username"
          aria-label="default input example"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          aria-label="default input example"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          className="form-control"
          type="text"
          placeholder="No Handphone"
          aria-label="default input example"
          onChange={(e) => setNoHp(e.target.value)}
        />
        <br />
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          aria-label="default input example"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        
      </form>
      <button onClick={handleAddDatUser} className="btn btn-warning">
          Daftar
        </button>
    </>
  );
}
