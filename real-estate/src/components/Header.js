import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { searchProperty } from "../store/action";

function Header(props) {

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.value;
    props.dispatch(searchProperty(query));
  };
  return (
    <>
      <nav className="header-nav-links">
        <ul>
          <Link to="/">Just Deal</Link>
        </ul>
        <ul>
          <Link className="ml-15" to="/" >Home</Link>
          <Link className="ml-15" to="/create">Add Property</Link>
          <Link className="ml-15" to="/signin">Sign In</Link>
          <Link className="ml-15" to="/signup">Sign Up</Link>
        </ul>
        <form>
          <input
            type="text"
            name="search-property"
            placeholder="Search Property"
            onInput={handleSearch}
          />
        </form>
      </nav>
    </>
  );
}

export default connect()(Header);
