import express from 'express'
import { prisma } from './prisma'
import { SubmitfeedbacksUseCase } from './use-cases/submit-feedbacks-use-cases'
import { FeedBackRepository } from './repositories/feedback-repository'
import { MailAdapter } from './adapters/mail-adapter'

export const router = express.Router()


router.post('/feedbacks',async (req,res)=> {

    const {type, comment, screenshot} = req.body 

    const feedbackrepository = new FeedBackRepository();
    const mailAdapter = new MailAdapter()
    const submitfeedbacksUseCase = new SubmitfeedbacksUseCase(feedbackrepository,mailAdapter);

    const submit = await submitfeedbacksUseCase.execute({
        type,
        comment,
        screenshot
    })


    return res.status(201).json(submit)

})