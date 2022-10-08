const mongoose = require('mongoose');


async function Connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/Shop_Watch');
        console.log("Connect successfully");
    }catch(error){
        console.log("Connect Faile!!!!");
    }
}

module.exports = { Connect };
