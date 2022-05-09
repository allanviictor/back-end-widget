import { NodemailerAdpater, NodemailerAdpaterData } from './nodemailer/nodemailer-adapter'
import nodemailer from "nodemailer";


export class MailAdapter implements NodemailerAdpater {

    async sendMail({subjetct,body}: NodemailerAdpaterData){

        var transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "19b08369eeff94",
                pass: "bc4b61e9508c1d"
            }
        });
        

        await transport.sendMail({
            from: "allan bananinha <bananinha@gmail.com>",
            to: "allanzoka <allanviictor07@gmail.com>",
            subject: subjetct,
            html: body
        })

     
         
    }
    
}