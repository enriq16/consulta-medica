const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();


router.get('/', (req,res)=>{
  const medicos = [];
  const{size} = req.query;
  const limit = size || 10;

  for(let index=0; index < limit; index++){
    medicos.push({
      id:    faker.number.int(),
      name:  faker.person.fullName(),
      email: faker.internet.email()
    });
  }

res.json(medicos);
});


module.exports = router;
