import express from 'express';
import { prisma } from './prisma'
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "19b08369eeff94",
        pass: "bc4b61e9508c1d"
    }
});


app.post('/feedbacks',async (req,res)=> {

    let {type, comment, screenShot} = req.body 

    const feedback = await prisma.feedback.create({
        data: {
            type: type,
            comment: comment,
            screenShot: screenShot
        }
    })


    await transport.sendMail({
        from: "allan bananinha <bananinha@gmail.com>",
        to: "allanzoka <allanviictor07@gmail.com>",
        subject: 'feedback do aplicativo',
        html: [
            `<h2>tipo de feedback: ${type}</h2>`,
            `<h2>comentario: ${comment}</h2>`,
            `<h2>foto:</h2>`,
            `<img style="width:500px;height:500px;object-fit:cover;" src=${screenShot}>`
        ].join('\n')
    })

    return res.status(201).json({data: feedback})

})



app.listen(3000,()=> {
    console.log('server is running !!')
})
