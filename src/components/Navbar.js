import { Link, graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {
  //---------
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollHandler);

      return () => {
        window.removeEventListener("scroll", scrollHandler);
      };
    };
  }, []);
  // --------------
  const data = useStaticQuery(graphql`
    query MainTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;
  return (
    <nav
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Link to="/" style={{ borderBlock: "none" }}>
        <h1 style={{marginTop:"35px"}}> {title} </h1>
      </Link>
      <nav 
        onClick={() => {
          updateExpanded((prevExpand) => !prevExpand);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      <div className="link">
        <Link to="/"  onClick={() => updateExpanded(false)}>Home</Link>
        <Link to="/projects"  onClick={() => updateExpanded(false)}>Projects</Link>
        <Link to="/about"  onClick={() => updateExpanded(false)}>About</Link>
      </div>
      </nav>
    </nav>
  );
}
