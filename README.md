![AppMealheimer](https://raw.githubusercontent.com/weslleson22/ImagensAppAlzheimer/main/01-Tela.png)
![AppMealheimer](https://raw.githubusercontent.com/weslleson22/ImagensAppAlzheimer/main/02-Tela.png)
![AppMealheimer](https://raw.githubusercontent.com/weslleson22/ImagensAppAlzheimer/main/03-Tela.png)
![AppMealheimer](https://raw.githubusercontent.com/weslleson22/ImagensAppAlzheimer/main/04-Tela.png)
<br>
<br>
# 🚀 Introdução


Este projeto utiliza a stack TypeScript de ponta a ponta, desde o back end com NodeJS até o front end e mobile com React (ReactDOM e React-Native, respectivamente).

# 🎸 Tecnologias usadas:

  ### - Linguagem: TypeScript

- NodeJS (Runtime JavaScript no lado do servidor)
  - TS-Node (Execução de TypeScript em ambiente NodeJS)
  - Express (Framework minimalista de NodeJS utilizado para configurações e roteamento)
  - Hapijs/joi (Validador de datas e schemas do ecossistema do framework hapijs para JavaScript)
  - Knex (Query Builder para lidar com bancos de dados SQL utilizando a sintaxe JavaScript)
  - SQLite3 (Banco de dados relacional embutido na estrutura de pastas)
  - Multer (Middleware de NodeJS para lidar com multipart/form-data)
  
- React (Biblioteca JavaScript/TypeScript para criação de interfaces)
  - Leaflet (Biblioteca open-source para mapas interativos)
  - React-Icons (Inclusão de bibliotecas de ícones em projetos React)
  
- React-Native (Framework para desenvolvimento mobile utilizando sintaxe React)
  - Expo (Framework e plataforma para construção de aplicativos React)
  
  
- Axios (Cliente para realizar requisições HTTP)

- IBGE API (Utilizada para receber listagem de estados e cidades brasileiras)

# ☕️ Começando

Para testar o aplicativo, é necessário criar uma cópia dele na sua máquina:

    $ git clone 
    
Depois precisamos gerar o banco de dados com o knex:

    $ cd backend
    $ npx knex migrate:latest --knexfile knexfile.ts
    
Então geramos os itens passíveis de coleta no banco de dados:

    $ npx knex seed:run --knexfile knexfile.ts
   
E finalmente iniciamos o back end e front end:

    //Abre o servidor em localhost:3333
    $ ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts 
    
    // Inicia a aplicação web
    $ cd ../frontend
    $ npm start
    
Para utilizar a versão mobile é preciso instalar o expo:
    
    $ npm install expo-cli --global
    $ expo start

e então só resta instalar o aplicativo do expo no celular e escanear o QR code gerado pelo comando acima. Lembre-se de manter sua máquina e seu celular na mesma rede wi-fi!



# 💻 Conhecimentos praticados:

 - Desenvolvimento com TypeScript deste o back até o front end
 - Utilização de mapas tanto no Mobile quando na Web
 - Utilização da API do IBGE
 - Manipulação e armazenamento de arquivos estáticos em um back end