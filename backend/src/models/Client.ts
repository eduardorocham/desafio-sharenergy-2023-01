import { Schema, model } from 'mongoose';

type ClientType = {
    nome: string,
    email: string,
    telefone: string,
    endereco: string,
    cpf: string
}

const schema = new Schema<ClientType>({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true},
    endereco: {type: String, required: true},
    cpf: {type: String, required: true}
});

const modelName : string = 'Clients';

export const User = model<ClientType>(modelName, schema);