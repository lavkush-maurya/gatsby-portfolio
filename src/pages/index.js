import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import Img from "gatsby-image";

export default function Home({ data }) {
  // console.log(data);

  return (
    <Layout>
      <section
        className={styles.header}
        style={{ display: "grid" }}
      >
        <div className={styles.imageWrapper}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ margin: "10px" }}
          />
        </div>
        <div className={styles.contentWrapper}>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
