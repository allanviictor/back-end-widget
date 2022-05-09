import { FeedbacksRepository } from "../repositories/prisma/prisma-feedbacks-respositorie"

export interface SubmitfeedbacksData {
    type:string,
    comment:string,
    screenshot?:string
}


export class SubmitfeedbacksUseCase {
    constructor(
        private FeedBackRepository: FeedbacksRepository
    ) {}

    async execute(requestBody:SubmitfeedbacksData){
        const {type, comment, screenshot} = requestBody 

        const feedback = await this.FeedBackRepository.create({
            type,
            comment,
            screenshot
        })

        
        return feedback 
    }
}