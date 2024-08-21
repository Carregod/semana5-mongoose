const { rejects } = require('assert')
const fs =require('fs')
const zlib = require('zlib')
const { resolve } = require('path')
const tecnologiaImagen=async (req,res)=>{
    
        console.log("recibiendo imagen")
        const image = req.file
        console.log(image.mimetype)
        console.log("archivo subido",image.filename)
        const id= req.params.id
        fs.rename('./public/images/'+image.filename,'./public/images/'+"tecnologia"+id+".jpg",()=>{console.log(" imgen cargada")})
        res.status(200).json({message:"imagen cargada correctamente"})
    
    
}
const tecnologiaVideo =async(req,res)=>{

    console.log("recibiendo video")
    const video = req.file
    console.log("SUBIENDO VIDEO", video.filename)
    const hashComprimido = await new Promise((resolve,rejects)=>{
        zlib.gzip(req.file.buffer, (err,buffer)=>{
            if(err) return rejects(err)
                resolve(buffer)
        })
    })
    console.log("nuevohash",hashComprimido)
    const nuevoVideo=fs.writeFileSync('./public/videos/videoNuevo.gz',hashComprimido,()=>{console.log(" video cargada")})
        res.send("video cargado")    
    //res.status(200).json({message:"video cargada correctamente"})

}
module.exports = {
    tecnologiaImagen,
    tecnologiaVideo
}