import React from "react";
import Link from "next/link";

const Notes = () => {
  return (
    <div>
      <h1>Notes PAGE </h1>
      <Link href="./notes/[id]" as={`./notes/1`}>
        <a>Note PAGE</a>
      </Link>
    </div>
  );
};

export default Notes;
