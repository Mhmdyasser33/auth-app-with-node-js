const allowedOrigin = require("./allowedOrigin")

const corsOptions = {
    origin : (origin , callback)=>{
        if(allowedOrigin.indexOf(origin) !== -1 || !origin){
            callback(null , true)
        }else{
            callback(new Error("not allowed by CORS")) ; 
        }
    } , 
    credentials : true ,
    optionsSuccessStatus : 200
}

module.exports = corsOptions ; 