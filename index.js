import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;
const corsorOptions = {credentials:true, original: process.env.URL || '*'};

app.use(cors(corsorOptions));
app.use(json());
app.use(cookieParser());

app.use('/', express.static(join(__dirname,'public')));

app.listen(PORT, ()=>console.log(`Server is listening on ${PORT}`));