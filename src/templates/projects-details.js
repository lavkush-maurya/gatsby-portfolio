import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import * as styles from "../styles/project-details.module.css";

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, stack } = data.markdownRemark.frontmatter;
  console.log(data);
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
      }
    }
  }
`;
