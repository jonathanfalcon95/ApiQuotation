'use strict';

const errors = require('../errors');
var Request = require("request");

//Function to obtain the ARS to USD quote
exports.quotationUsd = (req, res, next) => {
  // request from an external server
  Request.get("https://api.cambio.today/v1/quotes/USD/ARS/json?quantity=1&key=2088|qsFN6SwbBoo^F*cmNTKkHSwaJ1kk59Lq", (error, response, body) => {
    if (error) {
      next(errors.newHttpError(404, 'NOT FOUND'));
      return console.dir(error);
    } 
      let exchangeRate = JSON.parse(body).result
      const quotation =
        { 'moneda': 'Dolar', 'precio': exchangeRate.value }
        ;
      res.status(200).json(quotation);
    
  });

};

//Function to obtain the ARS to EUR quote
exports.quotationEur = (req, res, next) => {
  // request from an external server
  Request.get("https://api.cambio.today/v1/quotes/EUR/ARS/json?quantity=1&key=2088|qsFN6SwbBoo^F*cmNTKkHSwaJ1kk59Lq", (error, response, body) => {
    if (error) {
      next(errors.newHttpError(404, 'NOT FOUND'));
      return console.dir(error);
    } 
      let exchangeRate = JSON.parse(body).result
      const quotation =
        { 'moneda': 'Euro', 'precio': exchangeRate.value }
        ;
      res.status(200).json(quotation);
    
  });

};

//Function to obtain the ARS to  BRL quote
exports.quotationBrl = (req, res, next) => {
  // request from an external server
  Request.get("https://api.cambio.today/v1/quotes/BRL/ARS/json?quantity=1&key=2088|qsFN6SwbBoo^F*cmNTKkHSwaJ1kk59Lq", (error, response, body) => {
    if (error) {
      next(errors.newHttpError(404, 'NOT FOUND'));
      return console.dir(error);
    } else {
      let exchangeRate = JSON.parse(body).result
      const quotation =
        { 'moneda': 'Real', 'precio': exchangeRate.value }
        ;
      res.status(200).json(quotation);
    }
  });

};

exports.buggyRoute = (req, res, next) => {
  // Simulate a custom error
  next(errors.newHttpError(400, 'bad request'));
};
