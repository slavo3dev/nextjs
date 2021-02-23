// pages/notes/index.jsx
/** @jsximport 'theme-ui' */
import { jsx } from "theme-ui";
import React from "react";
import Link from "next/link";

export default ({ notes }) => {
  return (
    <div style={{ width: "100%", maxWidth: "960px", margin: "0 auto" }}>
      <h1>My Notes</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}>
        {notes.map((note) => (
          <div style={{ width: "33%", padding: "1%" }} key={note.id}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a style={{ textDecoration: "none", cursor: "pointer" }}>
                <div
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                    border: "1px solid",
                    borderColor: "red",
                    borderRadius: "6px",
                    padding: "4%",
                  }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/note`);
  const { data } = await res.json();

  return {
    props: { notes: data },
  };
}
