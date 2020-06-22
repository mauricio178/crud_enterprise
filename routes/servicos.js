const express = require ('express');
const router = express.Router();

// RETORNA TODOS OS SERVICO
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os servicos'
    });
});

// INSERE UM Servico
router.post('/', (req, res, next) => {
    const servico = {
        id_cliente: req.body.id_cliente,
        id_pedido: req.body.id_pedido,
        nome_produto: req.body.nome_produto
    }

    res.status(201).send({
        mensagem: 'Serviço adicionado',
        servicoCriado: servico
    });
});

// RETORNA OS DADOS DE UM SERVICO 
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
        
});

// DELETA UM PRODUTO
router.delete('/', (req, res , next) => {
    res.status(201).send({
        mensagem: 'Deletando pedido'
    })
});

module.exports = router;