const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())//aqui eu falo que estou uzando json para leitura dos arquivos
app.use(routes)

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parametros:
  * 
  * Query Params: Parametros nomeados envados na rota apos o "?" (filtros, paginação), para adicionar mais é só colocar "&"
  * Route Params: Parametros utilizados para identificar recursos 
  * Request Body: Corpo da requisição, utilizando para criar ou alterar recursos(pelo metodo POST, pegando um valor json)
  */

  /**
   * SQL: MYSQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Sever
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */



app.listen(3333)