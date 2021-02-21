import nc from "next-connect";

const handler = nc()
  .get((req, res) => {
    res.end("Hello world");
  })
  .post((req, res) => {
    res.json({ hello: "world" });
  });

export default handler;
