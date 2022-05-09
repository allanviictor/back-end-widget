import express from 'express'
import { prisma } from './prisma'
import { SubmitfeedbacksUseCase } from './use-cases/submit-feedbacks-use-cases'
import { FeedBackRepository } from './repositories/feedback-repository'

export const router = express.Router()


router.post('/feedbacks',async (req,res)=> {

    const {type, comment, screenshot} = req.body 

    const feedbackrepository = new FeedBackRepository();
    const submitfeedbacksUseCase = new SubmitfeedbacksUseCase(feedbackrepository);

    const submit = await submitfeedbacksUseCase.execute({
        type,
        comment,
        screenshot
    })


    /* await transport.sendMail({
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
 */
    return res.status(201).json(submit)

})