import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import Preloader from "./Pre"

export default function Layout({ children }) {
    // ------------ Load page
    const [load, updateLoad] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        updateLoad(false);
      }, 1200);
      return () => clearTimeout(timer);
    },[]);

  return (
    <div className="layout">
        <Preloader load={load} />
      <div className="navbar">
        <Navbar id={load ? "no-scroll" : "scroll"} />
      </div>
      <div
        className="content"
        style={{ padding: "0 40px", marginBottom: "40px" }}
      >
        {children}
      </div>
      <footer>
        <p> © 2023 - Created with 💛 - Lavkush Maurya</p>
      </footer>
    </div>
  );
}
