const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req,res)=>{
  const pacientes = [];
  const{size} = req.query;
  const limit = size || 10;

  for(let index=0; index<limit; index++){
    pacientes.push({
      name:  faker.person.fullName(),
      email: faker.internet.email()
    });
  }

res.json(pacientes);
});


router.get('/filter',(req,res)=>{
  res.send('Yo soy un filter');
});

router.get('/:id', (req,res)=>{
  const{id} = req.params;
  res.json({
    id,
    name:'Product 2',
    price:2000
  });
});

module.exports = router;
