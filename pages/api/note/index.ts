import nc from "next-connect";
import notes from "../../../src/data/data.ts";

const handler = nc()
  .post((req, res) => {
    const note = {
      ...req.body,
      id: Data.now(),
    };

    notes.push(note);
    res.json({ data: note });
  })
  .get((req, res) => {
    res.json({ data: notes });
  });

export default handler;
