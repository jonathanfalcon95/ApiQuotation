# Node.js-Express REST API

API used to calculate the conversion of the dollar, euro and real. To the Argentine peso

## Endpoints

* `GET /quotation/dolar`: Quoation Dollar
* `GET /quotation/euro`: Quoation Euro
* `GET /quotation/real`: Quoation Real
* `null`: Default route, returns 404 as the endpoint requested does not exist.

## Usage
```
npm install
npm start
```
## External server
https://cambio.today/api/quotes/full