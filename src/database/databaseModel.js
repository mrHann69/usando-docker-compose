'use strict';

class DatabaseModel {

  //obtener todos los elementos de la tabla
  async getAll(){
    const db = require('../database/pg.js');
    const resultado = await db.query('SELECT * FROM sampledbtable').catch(console.log);
    if(resultado) return resultado.rows;
     return;
  }

  //obtener solo 1 elemento por el id
  async getOne(oneId){
    const db = require('../database/pg.js');
    const resultado = await db.query('SELECT * FROM sampledbtable WHERE id=$1',
                                    [parseInt(oneId)])
                                    .catch(console.log);
    if(resultado) return resultado.rows[0];
    return;
  }

  //crear un elemento en la tabla
  async createOne(one){
    const db = require('../database/pg.js');
    await db.query('INSERT INTO sampledbtable (titulo, mensaje) VALUES ($1, $2)',
                  [one.titulo, one.mensaje])
                  .catch(console.log);
    return;
  }

  //actualizar un elemento de la tabla
  async updateOne(oneId, oneBody){
    const db = require('../database/pg.js');
    const original = await db.query('SELECT * FROM sampledbtable WHERE id=$1',[parseInt(oneId)])
                                   .catch(console.log);
    //actualizar el original
    await db.query('UPDATE sampledbtable SET titulo = $1 , mensaje = $2 WHERE id = $3',
                  [ oneBody.titulo, oneBody.mensaje, parseInt(oneId) ] )
                  .catch(console.error());
    return;
  }

  //eliminar un elemento de la tabla
  async deleteOne(oneId){
    const db = require('../database/pg.js');
    await db.query(`DELETE FROM sampledbtable WHERE id=$1`,
                  [parseInt(oneId)])
                  .catch(console.log);
  }
}

module.exports = DatabaseModel;
