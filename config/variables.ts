import dotenv from 'dotenv';
import { join } from 'path';
import { TVariables } from '../types';

dotenv.config({ path: join(__dirname, '../', `.env.${process.env.NODE_ENV}`) });

export const config: TVariables = {
    api: {
        port: ( process.env.PORT ? +process.env.PORT : 3000 ),
        baseUrl: process.env.BASE_URL || '',
    }
};