const express =require('express')
const app = express()
const puerto= 3000


app.use(express.json())


app.use("/api/tecnologies",require("./routes/tecnologies"))



app.listen(puerto, ()=>{ console.log("servidor Express mongoose activo puerto", puerto)}) 