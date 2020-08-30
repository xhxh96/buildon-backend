const express = require('express');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const docClient = require('../config/aws')

const router = express.Router();

const TABLE_NAME = 'user_details'

/*
  Get all users
 */
router.get('/', async function(req, res, next) {
  const params = {
    TableName: TABLE_NAME
  }

  const result = await docClient.scan(params).promise()
  res.json(result.Items)
});

/*
  Create user account
 */
router.post('/create', async function(req, res) {
  const { email, password } = req.body

  const uuid = uuidv4();
  const passwordHash = await bcrypt.hash(password, 10)

  const params = {
    TableName: TABLE_NAME,
    Item: {
      user_id: uuid,
      email,
      password: passwordHash
    }
  }

  docClient.put(params, function(err, data) {
    if (err) {
      console.error("Unable to add item. Error: ", JSON.stringify(err, null, 2))
      res.sendStatus(500)
    } else {
      res.status(200).json({ user_id: uuid })
    }
  })
})

router.get('/getUser', async function(req, res) {
  const { uuid: userId } = req.body

  const params = {
    TableName: TABLE_NAME,
    KeyConditionExpression: "#userId = :userId",
    ExpressionAttributeNames: {
      "#userId": "user_id"
    },
    ExpressionAttributeValues: {
      ":userId": userId
    }
  }

  docClient.query(params, function(err, data) {
    if (err) {
      console.error("Unable to query. Error: ", JSON.stringify(err, null, 2))
    } else {
      res.status(200).json(data.Items)
    }
  })
})

module.exports = router;
