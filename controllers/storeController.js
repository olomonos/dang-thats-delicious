exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index', {
    title: "I love food"
  });
};
