import { Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/User';
import { Client } from '../models/Client';

dotenv.config();

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
    if(nome && sobrenome && email && telefone && endereco && cpf) {
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
    } else {
        res.json({error: 'algo deu errado'})
    }
}

export const updateClient = async (req: Request, res: Response) => {
    const { nome, sobrenome, email, telefone, endereco, cpf } = req.body;
    const { id } = req.params;

    if (id) {
        await Client.updateOne(
            { _id : id },
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
    let { id } = req.body;

    if(id) {
        await Client.findOneAndDelete({ _id: id });

        res.json({status: 'deleted'});
    }
}