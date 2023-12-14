import { useState } from "react";

export default function TableRegisterComponent({ dataUser }) {

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nama</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Handphone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {dataUser.map((el) => (
            <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.nama}</td>
                <td>{el.username}</td>
                <td>{el.password}</td>
                <td>{el.no_hp}</td>
                <td>{el.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
