import { Schema, model } from 'mongoose';

type ClientType = {
    nomeCompleto: {
        nome: string,
        sobrenome: string
    },
    email: string,
    telefone: string,
    endereco: string,
    cpf: string
}

const schema = new Schema<ClientType>({
    nomeCompleto: {
        nome: {type: String, required: true },
        sobrenome: {type: String, required: true}
    },
    email: {type: String, required: true},
    telefone: {type: String, required: true},
    endereco: {type: String, required: true},
    cpf: {type: String, required: true}
});

const modelName : string = 'Clients';

export const Client = model<ClientType>(modelName, schema);