const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const questionSchema=new Schema({
    question:{
        type:String,
        required:true
    },
    option1:{
        type:String
    },
    option2:{
        type:String
    },
    option3:{
        type:String
    },
    option4:{
        type:String
    },
    answer:{
        type:String
    }
});

// const Question=mongoose.model("questions",questionSchema);

module.exports=questionSchema;