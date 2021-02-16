const covidRoutes = (app, fs) => {
  // variables
  const covidPath = './data/util.json';
  // READ
  app.get('/covid', (req, res) => {
      fs.readFile(covidPath, 'utf8', (err, data) => {
          if (err) {
              throw err;
          }
          res.send(JSON.parse(data));
      });
  });
};

module.exports = covidRouter;

