const notes = new Array(15).fill(1).map((_, i) => ({
  id: Date.now() + i,
  title: `Blog Post ${i}`,
}));

module.exports = notes;
