import { useState } from "react";

export default function FormRegisterComponent(props) {
    return (
        <>
<h1>Register Account User</h1>
      <form>
        <input
          name="nama_user"
          id="nama_user"
          class="form-control"
          type="text"
          placeholder="Nama Lengkap"
          aria-label="default input example"
        />
        <br />
        <input
          name="username"
          id="username"
          class="form-control"
          type="text"
          placeholder="Username"
          aria-label="default input example"
        />
        <br />
        <input
          name="password"
          id="password"
          class="form-control"
          type="password"
          placeholder="Password"
          aria-label="default input example"
        />
        <br />
        <input
          name="no_hp"
          id="no_hp"
          class="form-control"
          type="text"
          placeholder="No Handphone"
          aria-label="default input example"
        />
        <br />
        <input
          name="email_user"
          id="email_user"
          class="form-control"
          type="email"
          placeholder="Email"
          aria-label="default input example"
        />
        <br />
        <input
          name="alamat_lengkap"
          id="alamat_lengkap"
          class="form-control"
          type="text"
          placeholder="Alamat Lengkap"
          aria-label="default input example"
        />
        <br />
        <select
          class="form-select"
          aria-label="Default select example"
          id="id_kecamatan"
          name="id_kecamatan"
        >
          <option selected>Pilih Kecamatan</option>
          <option>Sindang</option>
          <option>Indramayu</option>
          <option>Haurgelis</option>
        </select>{" "}
        <br />
        <select
          class="form-select"
          aria-label="Default select example"
          id="id_desa"
          name="id_desa"
        >
          <option selected>Pilih Desa</option>
          <option>Dermayu</option>
          <option>Sindang</option>
          <option>Widasari</option>
        </select>
        <br />
        <input
          name="kode_pos"
          id="kode_pos"
          class="form-control"
          type="text"
          placeholder="Kode Pos"
          aria-label="default input example"
        />
        <br />
        <input type="submit" class="btn btn-dark" value="Submit"></input>
        <br />
      </form>
        </>
    )
}