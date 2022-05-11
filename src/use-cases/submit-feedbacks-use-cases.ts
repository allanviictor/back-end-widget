import { NodemailerAdpater } from "../adapters/nodemailer/nodemailer-adapter"
import { FeedbacksRepository } from "../repositories/prisma/prisma-feedbacks-respositorie"

export interface SubmitfeedbacksData {
    type:string,
    comment:string,
    screenshot?:string
}

export class SubmitfeedbacksUseCase {
    constructor(
        private FeedBackRepository: FeedbacksRepository,
        private nodemailerAdpater: NodemailerAdpater
    ) {}

    async execute(requestBody:SubmitfeedbacksData){
        const {type, comment, screenshot} = requestBody 

        const feedback = await this.FeedBackRepository.create({
            type,
            comment, 
            screenshot
        })

    
        await this.nodemailerAdpater.sendMail({
            subjetct: "novo Feedback",
            body: [
                `<h2>tipo de feedback: ${type}</h2>`,
                `<h2>comentario: ${comment}</h2>`,
                `<h2>foto:</h2>`,
                `<img style="width:500px;height:500px;object-fit:contain;" src=${screenshot}>`
            ].join('\n')
        })

        return feedback 
    }

   
}