import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">{children}</div>
      <footer>
        <p> © 2023 - Created with 💛 - Lavkush Maurya</p>
      </footer>
    </div>
  );
}
