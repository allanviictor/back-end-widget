import { FeedbacksCreateData, FeedbacksRepository } from "./prisma/prisma-feedbacks-respositorie";
import { prisma } from '../prisma'

export class FeedBackRepository implements FeedbacksRepository {

    async create({type,comment,screenshot}:FeedbacksCreateData){
        return await prisma.feedback.create({
            data: {
                type: type,
                comment: comment,
                screenShot: screenshot
            }
        })

    }

}