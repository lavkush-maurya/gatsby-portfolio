import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Navbar() {
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
    <nav>
      <Link to="/" style={{ borderBlock: "none" }}>
        <h1> {title} </h1>
      </Link>

      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
