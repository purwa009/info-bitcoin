import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Bitcoin Info</Link>
        </li>
        <li>
          <Link to="/convert-rupiah-to-bitcoin">Convert Rupiah to Bitcoin</Link>
        </li>
        <li>
          <Link to="/convert-bitcoin-to-rupiah">Convert Bitcoin to Rupiah</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
