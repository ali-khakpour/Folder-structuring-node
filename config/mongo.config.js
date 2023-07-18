const { default: mongoose } = require("mongoose");

const DB_URL = "mongodb://0.0.0.0:27017/mongoose-ali";

mongoose.connect(DB_URL).then(()=>{console.log("connected to mongodb");}).catch((err)=>{
    console.log(err.message);
})