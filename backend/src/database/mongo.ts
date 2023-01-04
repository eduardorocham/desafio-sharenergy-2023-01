import { connect } from "mongoose";
import dotenv from 'dotenv';

const mongoose = require('mongoose');

dotenv.config();

export const mongoConnect = async () => {
    try {
        console.log('Conectando ao MongoDB...');
        mongoose.set(`strictQuery`, true);
        mongoose.connect(process.env.MONGO_URL as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB conectado com sucesso');
    } catch(error) {
        console.log(error);
    }
}