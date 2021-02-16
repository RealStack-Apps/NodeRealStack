const rankRoutes = (app, fs) => {
    // variables
    const dataPath = './data/rank.json';

    // READ
    app.get('/rank', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
        res.send(JSON.parse(data));
        });
    });
    // READ
    app.get('/covid', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
};

module.exports = rankRouter;
