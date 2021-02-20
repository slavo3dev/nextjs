import React from "react";
import Link from "next/link";

const Home = () => (
  <div>
    <h1>NextJS</h1>
    <Link href="./notes">
      <a>Click - Notes</a>
    </Link>
  </div>
);

export default Home;
