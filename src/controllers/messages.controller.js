import {MessagesModel} from '../dao/models/messages.models.js'

export async function obtenerMessages(req,res){
    try {
        // MessagesModel.find((err,data)=>{
        //     console.log(data)
        //     if (err) return console.error(err);;
        //     res.render('chat', {data:data});
        // })
        const data = await MessagesModel.find().lean();
        res.render('chat', {data:data});
    } catch (error) {
        throw new Error(error.message)
    }
}