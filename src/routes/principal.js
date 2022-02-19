const express = require('express');
const router = express.Router();

const conexion = require('../database/databaseModel.js');
const dbModel = new conexion();

// get all
router.get('/', async (req, res) => {
  const getAllOnes = await dbModel.getAll();
  return res.status(200).json(getAllOnes);
});

//get only one result
router.get('/:id', async(req,res)=>{
  const getOne = await dbModel.getOne(req.params.id);
  res.status(200).json(getOne);
});

// create a new element in db
router.post('/',async (req,res)=>{
  const {titulo, mensaje} = req.body;
  const elementoCreado = await dbModel.createOne({titulo, mensaje});
  res.status(201).json(elementoCreado);
});

// update an element in db
router.put('/:id', async(req,res)=>{
  const resultado = await dbModel.updateOne(req.params.id, req.body);
  res.status(201).json(resultado);
});

//delete an element in db
router.delete('/:id', async(req,res)=>{
  await dbModel.deleteOne(req.params.id);
  res.status(204).json();
});

module.exports = router;
