const {Pool} = require('pg');

//configuracion para el contenedor
const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'sampledb',
    password: 'postgres',
    port: 5432
});

module.exports = {
  query: (text, params)=>pool.query(text, params)
}
