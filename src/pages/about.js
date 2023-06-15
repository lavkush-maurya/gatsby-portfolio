import React from "react";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div>
        <h1>About Me</h1>
        <p>
          I'm a self-taught Front End developer from India. I build websites
          with a focus on providing the experience for everyone using them and
          responsiveness. Curious to learn more about developing scalable
          distribution systems, love problem solving, and care about writing and
          maintainable code. A responsive design makes your website accessible
          to all users, regardless of their devices.
        </p>
      </div>
    </Layout>
  );
}

export const Head = () => <title>About Me! </title>;
