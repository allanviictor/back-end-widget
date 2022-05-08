import express from 'express';
import { prisma } from './prisma'

const app = express();

app.use(express.json());

app.post('/feedbacks',async (req,res)=> {

    let {type, comment, screenShot} = req.body 

    await prisma.feedback.create({
        data: {
            type: type,
            comment: comment,
            screenShot: screenShot
        }
    })

    return res.status(201).send({data: req.body})

})



app.listen(3000,()=> {
    console.log('server is running !!')
})
