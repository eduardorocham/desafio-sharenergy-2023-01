import { Schema, model } from 'mongoose';

type UserType = {
    username: string,
    password: string
}

const schema = new Schema<UserType>({
    username: {type: String, required: true},
    password: {type: String, required: true}
});

const modelName : string = 'User';

export const User = model<UserType>(modelName, schema);
