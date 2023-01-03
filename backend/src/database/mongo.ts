import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect = async () => {
    try {
        console.log('Conectando ao MongoDB...');
        const mongoose = require('mongoose');
        mongoose.connect(process.env.MONGO_URL as string)
        console.log('MongoDB conectado com sucesso');
    } catch(error) {
        console.log(error);
    }
}