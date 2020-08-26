const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1'
})

AWS.config.apiVersions = {
  dynamodb: "2012-08-10"
}

const dynamoDocClient = new AWS.DynamoDB.DocumentClient();

module.exports = dynamoDocClient
