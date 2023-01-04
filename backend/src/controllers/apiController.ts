import { exec } from 'child_process';
import { Request, Response } from 'express';
import { json } from 'stream/consumers';
import { User } from '../models/User';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

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
    const { username, password } = JSON.parse(req.body);
    if(username && password) {
        
        let user = await User.findOne({
            username
        });

        if(user) {
            res.json({ status: true });
            return;
        }
    }

    res.json({ status: false });
}

// export const list = async (req: Request, res: Response) => {
//     let users = await User.findAll();
//     let list: string[] = [];

//     for(let i in users) {
//         list.push( users[i].email );
//     }

//     res.json({ list });
// }