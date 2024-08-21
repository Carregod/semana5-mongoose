const express=require('express')
const router = express.Router()
// const tecnologias = require('../controllers/tecnologiasCtrl')
// const multer = require('multer')


router.get("/",  (res,req)=>{res.send("base")}

)

// router.get("/:id/:nombre", (res,req)=>{res.send("base")}
//     //tecnologias.tecnologiasListar
    
// )

// const upload = multer({dest:'public/images/'})
// router.put("/imagen/:id", upload.single('imagen'),
// tecnologias.tecnologiaImagen 
// )
// const uploadVideos = multer({dest:'public/videos/'})
// router.put("/video/:id",
//     uploadVideos.single('video'), 
//     tecnologias.tecnologiaVideo

// )


module.exports= router