import { Link } from "react-router-dom";
export default function NavbarComponent() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://satujam.com/wp-content/uploads/2015/03/sayuran.jpg"
              className="d-block w-50 mx-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://satujam.com/wp-content/uploads/2015/03/sayuran.jpg"
              className="d-block w-50 mx-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://satujam.com/wp-content/uploads/2015/03/sayuran.jpg"
              className="d-block w-50 mx-auto"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/login">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"}>
                  <button type="button" className="btn btn-dark">
                    Home
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-dark">
                  Cart
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-dark">
                  Transaksi
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-dark">
                  Pesanan
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-dark">
                  Kelola Akun
                </button>
              </li>
              F
              <li className="nav-item">
                <button type="button" className="btn btn-dark">
                  Sign Up
                </button>
              </li>
              <li className="nav-item">
                <Link to={"/login"}>
                  <button type="button" className="btn btn-dark">
                    Login
                  </button>
                </Link>
              </li>
              :
              <li className="nav-item">
                <button type="button" className="btn btn-dark">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
