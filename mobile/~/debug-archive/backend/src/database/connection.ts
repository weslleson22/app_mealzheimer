import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true
});

export default connection 
 //__dirname eh uma variavel global onde ela vai trazer como retorno o caminho do meu diretorio qu está executando ele.

  //Migrations = Historico do bando de dados

  // create table points
// create table users