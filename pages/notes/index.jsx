// pages/notes/index.jsx
/** @jsximport 'theme-ui' */
import { jsx } from "theme-ui";
import Link from "next/link";

export default () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `This is my note ${i}` }));

  return (
    <div css={{ variant: "containers.page" }}>
      <h1>My Notes</h1>

      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}>
        {notes.map((note) => (
          <div css={{ width: "33%", p: 2 }}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a css={{ textDecoration: "none", cursor: "pointer" }}>
                <div css={{ variant: "containers.card" }}>
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
