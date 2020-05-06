import React from "react";
import styled from "styled-components";

import Layout from "~/layout/Layout";

const Styled = styled.article`
  position: relative;
  max-width: 60rem;
  margin: 12rem auto;
  text-align: center;
  padding: 0 3rem;
  h2 {
    margin: 1rem 0;
  }
`;

const browser = typeof window !== "undefined" && window;

const NotFoundPage = () => {
  if (!browser) {
    return null;
  }
  return (
    <Layout>
      <Styled>
        <Warning width="300px" height="250px" />
        <h2>Whoops!</h2>
        <p>The requested URL was not found.</p>
      </Styled>
    </Layout>
  );
};

export default NotFoundPage;
