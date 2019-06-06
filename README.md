# Node.js-Express REST API

API used to calculate the conversion of the dollar, euro and real. To the Argentine peso

## Endpoints

* `GET /cotizacion/dolar`: Quoation Dollar
* `GET /cotizacion/euro`: Quoation Euro
* `GET /cotizacion/real`: Quoation Real
* `null`: Default route, returns 404 as the endpoint requested does not exist.

## Usage
```
npm install
npm start
```
## Example to use
```
http://localhost:3000/cotizacion/dolar

```
Note: Api runs by default in port 3000

## External server
https://cambio.today/api/quotes/full