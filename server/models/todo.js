var mongoose = require ('mongoose');
var Todo = mongoose.model('Todo' , {
    text : {
        type : String,
        required : true,  //tidak boleh kosong
        minlenght : 1,
        trim : true   //memisahkan spasi / memotong spase tidak perlu
    },
    completed : {
        type : Boolean,
        default : false
    },
    completedAd : {
        type : Number,
        default : null

    }
    
});
module.exports = {
    Todo
}
