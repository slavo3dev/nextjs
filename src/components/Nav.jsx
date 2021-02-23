import React from "react";
import Link from "next/link";

const Nav = () => (
  <header
    style={{
      height: "60px",
      width: "100vw",
      backgroundColor: "blue",
      borderBottom: "1px solid red",
      color: "white",
    }}>
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
      }}>
      <Link href="/">
        <a
          style={{
            fontWeight: "bold",
            fontSize: "1.5em",
            cursor: "pointer",
            color: "white",
            paddingLeft: "1%",
          }}>
          Note App
        </a>
      </Link>

      <Link href="/notes">
        <a style={{ color: "white", fontSize: "1em", cursor: "pointer" }}>
          notes
        </a>
      </Link>

      <a
        style={{
          color: "white",
          fontSize: "1em",
          paddingRight: "1%",
          cursor: "pointer",
        }}
        href={process.env.HELP_APP_URL}
        target="_blank">
        Help
      </a>
    </nav>
  </header>
);

export default Nav;
