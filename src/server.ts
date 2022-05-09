import express from 'express';
import nodemailer from "nodemailer";
import { router } from './routes'

const app = express();

app.use(express.json());

app.use(router)

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "19b08369eeff94",
        pass: "bc4b61e9508c1d"
    }
});






app.listen(3000,()=> {
    console.log('server is running !!')
})
