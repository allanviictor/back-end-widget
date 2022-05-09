export interface NodemailerAdpaterData {
    subjetct: string,
    body:string 
}


export interface NodemailerAdpater {
    sendMail: (data: NodemailerAdpaterData) => Promise<void>
}