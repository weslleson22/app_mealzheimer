import express from 'express';


const app = express();

app.get('/users', (request, response)=>{
    console.log('Lista 2');

    response.json([
        "Wesleson Souza I",
        "Werves",
        "Silva", 
    ]);
});

app.listen(5000);