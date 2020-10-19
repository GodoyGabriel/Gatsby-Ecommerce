require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
import http from 'axios';

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
  access_token: process.env.MERCADO_PAGO_SK
});

// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// Este valor reemplazará el string "<%= global.id %>" en tu HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});

a/* sync function proceedToPayment() {
  const res = await mercadopago.preferences.create(preference)
} */