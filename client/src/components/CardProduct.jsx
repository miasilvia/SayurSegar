export default function CardProductComponent(props) {
  return (
    <>
      <div className="card" style={{ width: "18rem", margin: "10px" }}>
        <img
          src="https://fungsi.info/wp-content/uploads/2013/01/Fungsi-dan-Manfaat-Buah-Tomat.jpg"
          className="card-img-top img-fluid"
          style={{ height: "100%", height: "15rem" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Sawi</h5>
          <p>Stok: 2 </p>
          <p>Rp. 10.000 / 250 gram Disc: 0 %</p>
          <p className="card-text"></p>
          <form>
            <input type="hidden" name="id_produk" value="" />
            <input type="number" placeholder="jumlah produk" />
            <button className="btn btn-dark">Add</button>
          </form>
        </div>
      </div>
    </>
  );
}
