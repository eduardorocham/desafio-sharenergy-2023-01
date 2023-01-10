import { Router } from 'express';

import * as ApiController from '../controllers/apiController';
import { Auth } from '../middlewares/auth';

const router = Router();

// router.post('/register', ApiController.register);
router.post('/login', ApiController.login);

router.get('/list', Auth.private, ApiController.listClients); //Pegar a lista de clientes
router.get('/list/:id', Auth.private, ApiController.getClient) //Pegar um cliente específico
router.post('/list', Auth.private, ApiController.createClient); //Criar uma novo cliente
router.put('/list/:id', Auth.private, ApiController.updateClient) //Editando um cliente
router.delete('/list', Auth.private, ApiController.deleteClient) //Deletando um cliente


export default router;