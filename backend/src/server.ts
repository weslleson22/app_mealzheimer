// Rota: Endereço completo da requisição
// Recurso: Qual a entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do Back-end
// POST: Criar uma nova informação do Back-end
// PUT: Atualizar uma informação existente do Back-end
// DELETE: Remover uma informação do Banck-end

//POST: http://localhost:3000/users = Criar usuários
// GET: http://localhost:3333/users = Lista usuários
// GET: http://localhost:3333/users/id = Busca dados do usuário com ID 5


//Request Param: Paramentros que vem na Própria rota que identicam um recurso.
// Query Param:  Parametros que vem na propria rota geralmente opcionais para filtros. Paginação
// Request Body: Paramentros para a criação / atualização de informações

//SELECT *FROM users WHERE name = 'Diego'
// knex('users').where('name, 'wesleson').select('*')

import  express  from "express";
import routes from './routes';
import path from 'path';
const app = express();

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads' )));
app.listen(3333);