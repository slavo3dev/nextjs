import React from "react";

export default ({ content }) => (
  <div style={{ height: `calc(100vh - 60px)` }}>
    <div
      style={{
        width: "100%",
        maxWidth: "960px",
        margin: 0,
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}>
      <h1 style={{ fontSize: "3em", margin: "0 auto" }}>{content.title}</h1>
    </div>
  </div>
);

export function getStaticProps() {
  return {
    props: {
      content: {
        title: "- Personal Note APP -",
      },
    },
  };
}