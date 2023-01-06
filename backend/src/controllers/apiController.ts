import { Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/User';
import { Client } from '../models/Client';

dotenv.config();

// export const register = async (req: Request, res: Response) => {
//     if(req.body.email && req.body.password) {
//         let { email, password } = req.body;

//         let hasUser = await User.findOne({where: { email }});
//         if(!hasUser) {
//             let newUser = await User.create({ email, password });

//             res.status(201);
//             res.json({ id: newUser.id });
//         } else {
//             res.json({ error: 'E-mail já existe.' });
//         }
//     }

//     res.json({ error: 'E-mail e/ou senha não enviados.' });
// }

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if(username && password) {
        
        let user = await User.findOne({
            username,
            password
        });

        if(user) {
            const token = JWT.sign(
                { username, password }, 
                process.env.JWT_SECRET_KEY as string
            );

            res.json({ status: true, token });
            return;
        }
    }

    res.json({ status: false });
}

export const listClients = async (req: Request, res: Response) => {
    let clients = await Client.find({});
    res.json({ clients });
}

export const getClient = async (req: Request, res: Response) => {
    let { id } = req.params;

    try {
        let client = await Client.findById(id);
        if (client) {
            res.json({ client }); 
        }
    } catch {
        res.json({ error: 'Cliente não encontrado' })
    }
}

export const createClient = async (req: Request, res: Response) => {
    const { nome, sobrenome, email, telefone, endereco, cpf } = req.body;
    if(req.body) {
        let newClient = await Client.create({
            nomeCompleto: {
                nome,
                sobrenome
            },
            email,
            telefone,
            endereco,
            cpf
        });

        res.json({ id: newClient.id });
    }
}

export const updateClient = async (req: Request, res: Response) => {
    const { nome, sobrenome, email, telefone, endereco, cpf } = req.body;
    const { id } = req.params;

    if (id) {
        await Client.updateOne(
            { id },
            {
                nomeCompleto: {
                    nome,
                    sobrenome
                },
                email,
                telefone,
                endereco,
                cpf
            }
        );

        res.json({status: 'updated'});
    }
}

export const deleteClient = async (req: Request, res: Response) => {
    let { id } = req.params;

    if(id) {
        await Client.findOneAndDelete({ id });

        res.json({status: 'deleted'});
    }
}