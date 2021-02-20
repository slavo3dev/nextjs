import React from "react";
import { useRouter } from "next/router";

const Note = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Note Page {id}</h1>
    </div>
  );
};

export default Note;
