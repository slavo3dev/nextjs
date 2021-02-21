import React from "react";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div css={{ width: "100%", maxWidth: "960px", margin: "0 auto" }}>
      <h1>Note: {id} </h1>
    </div>
  );
};
