const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// ROTAS CRIADAS
const rotaClientes = require('./routes/clientes');
const rotaServicos = require('./routes/servicos');

app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({ extended: false})); // dados simples
app.use(bodyParser.json()); // json de entrada  no body

app.use((req, res, next) => {
    res.header('Acess-control-Allow-Origin', '*');
    res.header(
        'Acess-Control-Allow-Header',
        'Origin, X-Requested-With, Constent-Type, Accept, Autorization'
    );

    if (req.method === 'OPTIONS'){
        res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
})

app.use('/clientes', rotaClientes);
app.use('/servicos', rotaServicos);

// QUANDO NAO É ENCONTRADO NENHUMA ROTA
app.use((req, res, next) => {
    const erro = new Error('Não Encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensage: error.message
        }
    });
});

module.exports = app; 