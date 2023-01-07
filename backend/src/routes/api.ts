import { Router } from 'express';

import * as ApiController from '../controllers/apiController';

const router = Router();

// router.post('/register', ApiController.register);
router.post('/login', ApiController.login);

router.get('/list', ApiController.listClients); //Pegar a lista de clientes
router.get('/list/:id', ApiController.getClient) //Pegar um cliente específico
router.post('/list', ApiController.createClient); //Criar uma novo cliente
router.put('/list/:id', ApiController.updateClient) //Editando um cliente
router.delete('/list', ApiController.deleteClient) //Deletando um cliente


export default router;