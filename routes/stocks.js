const express = require('express')
const apiKey = require('../constants/marketStack')
const axios = require('axios');


const router = express.Router();

router.get('/topFive', async function (req, res) {
  const stocks = ['GS', 'MDT', 'NAT', 'CRK', 'SID']
  const params = {
    access_key: apiKey
  }

  Promise.all(stocks.map(stock => axios.get(`http://api.marketstack.com/v1/tickers/${stock}/eod/latest`,
    {params}).then(response => response.data)
  )).then(value => {
    const response = []

    for (let i = 0; i < stocks.length; i++) {
      response.push({stock: stocks[i], data: value[i]})
    }
    res.status(200).json(response)
  }).catch(err => res.status(400).json(err.message))
})

router.get('/userStock', async function (req, res) {
  const { email } = req.body

  const stocks = email === 'peter@email.com' ? ['GOOGL', 'TRIL', 'OSMT', 'KPTI', 'PHAS'] : ['SMH', 'GLUU', 'XLU', 'SRET', 'EXAS']
  const params = {
    access_key: apiKey
  }
  Promise.all(stocks.map(stock => axios.get(`http://api.marketstack.com/v1/tickers/${stock}/eod/latest`,
    {params})
    .then(response => response.data)))
    .then(value => {
      const response = []
      for (let i = 0; i < stocks.length; i++) {
        response.push({stock: stocks[i], data: value[i]})
      }
      res.status(200).json(response)
    }).catch(err => res.status(400).json(err.message))
})

router.get('/userStockRecommended', async function (req, res) {
  const stocks = ['LQD', 'IBDL', 'TOTL', 'USHY']
  const params = {
    access_key: apiKey
  }
  Promise.all(stocks.map(stock => axios.get(`http://api.marketstack.com/v1/tickers/${stock}/eod/latest`,
    {params})
    .then(response => response.data)))
    .then(value => {
      const response = []
      for (let i = 0; i < stocks.length; i++) {
        response.push({stock: stocks[i], data: value[i]})
      }
      res.status(200).json(response)
    }).catch(err => res.status(400).json(err.message))
})

router.get('/userStockTasteBreaker', async function (req, res) {
  const stocks = ['MSFT', 'DD', 'CALA', 'ACAD', 'CRNC']
  const params = {
    access_key: apiKey
  }
  Promise.all(stocks.map(stock => axios.get(`http://api.marketstack.com/v1/tickers/${stock}/eod/latest`,
    {params})
    .then(response => response.data)))
    .then(value => {
      const response = []
      for (let i = 0; i < stocks.length; i++) {
        response.push({stock: stocks[i], data: value[i]})
      }
      res.status(200).json(response)
    }).catch(err => res.status(400).json(err.message))
})

module.exports = router;
