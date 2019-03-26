module.exports = app => {
  // CREATE
  app.post("/products/new", (req, res) => {
    console.log(req.body);
  });
};
