import React from "react";
import { connect } from "react-redux";
import "../assets/css/header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="logo">NOTES KEEPER</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};
export default connect(mapStateToProps)(Header);
