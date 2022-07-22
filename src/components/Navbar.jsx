import React from "react";
import {Link} from "react-router-dom";

const Navbar = ({isLogged, setIsLogged}) => {


  const handleClick = () => {
    setIsLogged(!isLogged);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Shoppy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page" >Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="/">
                Home
              </a> */}
            </li>
            <li className="nav-item">
                <Link to={"/about"} className="nav-link" >About us</Link>
              {/* <a className="nav-link" href="/">
                About us
              </a> */}
            </li>
            <li className="nav-item">
                <Link to={"/contact"} className="nav-link" >Contact us</Link>
              {/* <a className="nav-link" href="/">
                Contact us
              </a> */}
            </li>
            <li className="nav-item">
                <Link to={"/products"} className="nav-link" >Products</Link>
              {/* <a className="nav-link" href="/">
                Products
              </a> */}
            </li>
            <li className="nav-item">
              {isLogged ? <button type="button" className="btn btn-primary" onClick={handleClick} >Logout</button> : <button type="button" className="btn btn-primary" onClick={handleClick} >Login</button>}
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
