const AWS = require('aws-sdk');
const config = require('../../../config/config.js');
module.exports = (app) => {
  // Gets all countrys
  app.get('/api/countrys', (req, res, next) => {
   AWS.config.update(config.aws_remote_config);
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      covidGlobal: config.aws_table_name
    };
    docClient.scan(params, function(err, data) {
      if (err) {
        res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else {
        const { Items } = data;
        res.send({
          success: true,
          message: 'Loaded countrys',
          countrys: Items
        });
      }
    });
  }); // end of app.get(/api/countrys)
  // Get a single country by id
  app.get('/api/country', (req, res, next) => {
    const countryId = req.query.id;
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      covidGlobal: config.aws_table_name,
      KeyConditionExpression: 'countryId = :i',
      ExpressionAttributeValues: {
        ':i': countryId
      }
    };
    docClient.query(params, function(err, data) {
      if (err) {
        res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else {
        console.log('data', data);
        const { Items } = data;
        res.send({
          success: true,
          message: 'Loaded countrys',
          countrys: Items
        });
      }
    });
  });
  // Add a country
  app.post('/api/country', (req, res, next) => {
    const { type, color } = req.body;
    // Not actually unique and can create problems.
    const countryId = (Math.random() * 1000).toString();
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: config.aws_table_name,
      Item: {
        countryId: countryId,
        countryType: type,
        color: color
      }
    };
    docClient.put(params, function(err, data) {
      if (err) {
        res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else {
        console.log('data', data);
        const { Items } = data;
        res.send({
          success: true,
          message: 'Added country',
          countryId: countryId
        });
      }
    });
  });
};