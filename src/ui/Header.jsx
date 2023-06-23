import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">FastPizza Co.</Link>
      <SearchOrder />
      <p>Adi</p>
    </header>
  );
};

export default Header;
