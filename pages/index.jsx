// pages/index.jsx
/** @jsximport 'theme-ui' */
import { jsx } from "theme-ui";
import Link from "next/link";

export default () => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      css={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}>
      <h1 css={{ fontSize: 8, my: 0 }}>
        This is a really dope note taking app.
      </h1>
    </div>
  </div>
);
