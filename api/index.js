const serverless = require('serverless-http');
const app = require('../app');
const dbConnect = require('../db');

module.exports = async (req, res) => {
  await dbConnect();                 // ensure Mongo is ready
  return serverless(app)(req, res);  // run Express as a serverless handler
};