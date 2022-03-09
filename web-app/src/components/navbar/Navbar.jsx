import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Medicines
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/labtests">
                Lab Tests
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/compoundingpharmacy">Compounding Pharmacy</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/labtests/healt-packages">
              Health Packages
            </Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-link"  to={`/search-result/Herbals`}>
                Herbals
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/asaanorder" className="btn btn-primary-100">
          Asaan Order
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
