import express from 'express';
import nodemailer from 'nodemailer';
import { connection } from '../dbSetup.js';
import { GMAIL_APP_PASSWORD } from '../env.js';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'valentaite@gmail.com',
        pass: GMAIL_APP_PASSWORD,
    },
});

export const submission = express.Router();

submission.post('/', async (req, res) => {
        const { name, email, message } = req.body;

        const errors = [];

        if (!name || name.length < 2 || name.length > 60) {
            errors.push({
                input: 'name',
                msg: 'Vardas turi būti tarp 2-60 simbolių.'
            });
        }

        const nameWords = (name || '').split(' ');
        if (nameWords.length < 1 || nameWords.length > 3) {
            errors.push({
                input: 'name',
                msg: 'Vardas negali būti ilgesnis nei 3 žodžiai.'
            });
        }

        for (const word of nameWords) {
            if (word[0] !== word[0].toUpperCase()) {
                errors.push({
                    input: 'name',
                    msg: 'Kiekvienas vardo žodis turi prasidėti dydžiąją raide.'
                });
            }
        }

        if (!email || email.length < 6 || email.length > 100) {
            errors.push({
                input: 'email',
                msg: 'El. paštas turi būti iš 6-100 simbolių.'
            });
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            errors.push({
                input: 'email',
                msg: 'Neteisinga el. pašto konfiguracija.'
            });
        }

    try {

        const insertQuery = `INSERT INTO \`form-submissions\` (name, email, message) VALUES (?, ?, ?)`;
        const [insertRes] = await connection.execute(insertQuery, [name, email, message]);

        if (insertRes.affectedRows > 0) {
            const mailOptions = {
                from: email,
                to: 'valentaite@gmail.com',
                subject: 'New Form Submission',
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });

            return res.status(200).json({
                status: 'ok',
                msg: 'Form submission successful',
            });
        } else {
            return res.status(400).json({
                status: 'err',
                msg: 'Form submission failed',
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: 'err',
            msg: 'POST: SUBMISSION API - server error.',
        });
    }
});

submission.use((_req, res, _next) => {
    return res.status(404).json({ msg: 'Unsupported "Submission" method' });
});

// import express from 'express';
// import { connection } from '../dbSetup.js';

// export const submission = express.Router();

// submission.post('/', async (req, res) => {
//         const { name, email, message } = req.body;

//         const errors = [];

//         if (!name || name.length < 2 || name.length > 60) {
//             errors.push({
//                 input: 'name',
//                 msg: 'Vardas turi būti tarp 2-60 simbolių.'
//             });
//         }

//         const nameWords = (name || '').split(' ');
//         if (nameWords.length < 1 || nameWords.length > 3) {
//             errors.push({
//                 input: 'name',
//                 msg: 'Vardas negali būti ilgesnis nei 3 žodžiai.'
//             });
//         }

//         for (const word of nameWords) {
//             if (word[0] !== word[0].toUpperCase()) {
//                 errors.push({
//                     input: 'name',
//                     msg: 'Kiekvienas vardo žodis turi prasidėti dydžiąją raide.'
//                 });
//             }
//         }

//         if (!email || email.length < 6 || email.length > 100) {
//             errors.push({
//                 input: 'email',
//                 msg: 'El. paštas turi būti iš 6-100 simbolių.'
//             });
//         }

//         const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//         if (!emailRegex.test(email)) {
//             errors.push({
//                 input: 'email',
//                 msg: 'Neteisinga el. pašto konfiguracija.'
//             });
//         }

//     try {

//         const insertQuery = `INSERT INTO \`form-submissions\` (name, email, message) VALUES (?, ?, ?)`;
//         const [insertRes] = await connection.execute(insertQuery, [name, email, message]);

//         if (insertRes.affectedRows > 0) {
//             return res.status(200).json({
//                 status: 'ok',
//                 msg: 'Form submission successful',
//             });
//         } else {
//             return res.status(400).json({
//                 status: 'err',
//                 msg: 'Form submission failed',
//             });
//         }
//     } catch (error) {
//         return res.status(500).json({
//             status: 'err',
//             msg: 'POST: SUBMISSION API - server error.',
//         });
//     }
// });

// submission.use((_req, res, _next) => {
//     return res.status(404).json({ msg: 'Unsupported "Submission" method' });
// });
