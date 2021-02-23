import React from "react";

export default ({ note }) => {
  return (
    <div style={{ width: "100%", maxWidth: "960px", margin: "0 auto" }}>
      <h1>Note: {note.title} </h1>
    </div>
  );
};

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`);

  if (!response.ok && typeof window === "undefined") {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  return {
    props: { note: data },
  };
}
