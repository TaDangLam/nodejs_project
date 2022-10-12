module.exports = {
    // 1 list nhiều document trong DB kiểu mạng chuyển thành Obj để cho gọn bên controller
    MutipleMongooseToObject: function(mongooseArrays){
        return mongooseArrays.map(Product => Product.toObject());
    },

    // 1 có 1 document trong DB
    MongooseToObject: function(mongoose){
        //nếu có thì return mongoose.toObject() còn không thì return mongoose
        return mongoose ? mongoose.toObject() : mongoose;
    }
}