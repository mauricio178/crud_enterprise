const express = require ('express');
const router = express.Router();

// RETORNA TODOS OS Clientes
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o Get dentro da rota de Clientes'
    });
});

// INSERE UM Clientes 

router.post('/', (req, res, next) => {
    const clientes = {
        nome: req.body.nome,
        cpf: req.body.cpf
    }
    res.status(201).send({
        mensagem: 'Cliente Adicionado',
        clienteCriado: clientes
    });
});

// RETORNA OS DADOS DE UM Cliente
router.get('/:id_cliente', (req, res, next) => {
    const id = req.params.id_cliente

    if (id === 'id'){
        res.status(200).send({
        mensagem: 'ID Cliente',
        id: id
    });
    } else {
        res.status(200).send({
            mensagem: 'Id Desconhecido'
        });
    }
});

// ALTERA UM Cliente
router.patch('/', (req, res , next) => {
    res.status(201).send({
        mensagem: 'Utilizando método Patch Cliente'
    })
});

// DELETA UM Cliente
router.delete('/', (req, res , next) => {
    res.status(201).send({
        mensagem: 'Utilizando método Delete Cliente'
    })
});

module.exports = router;