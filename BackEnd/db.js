const mongoose = require('mongoose');
const mongoUri ='mongodb+srv://ahtsham:Cipher1357@cluster0.tdzr3cw.mongodb.net/test=mr-notebook'
const connectToMongo = ()=>{
    mongoose.connect(mongoUri,()=>{
        console.log('Connected to MongoDB successfully');
    });
}
module.exports = connectToMongo