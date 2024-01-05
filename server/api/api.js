import express from 'express';
import { submission } from './submission.js';

export const api = express.Router();

api.all('/', (_req, res) => {
    return res.json({
        msg: 'Incomplete URL',
    });
});

api.use('/submission', submission);