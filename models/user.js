import { Schema, model } from 'mongoose';
import { hashSync, genSaltSync, compareSync } from 'bcryptjs';

var schema = Schema;

var userSchema = new schema({
    id:{
        type: Number,
        require: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: { type: Boolean,
        default: false
        },
   failsAttempts : {
       type: Number,
       default: 0
   },
   isBlocked : {
       type: Boolean,
       default: false
   }
})

userSchema.methods.hashPassword = (password) => {
    return hashSync(password, genSaltSync(10));
} 

userSchema.methods.comparePassword = (password, hash) => {
    return compareSync(password,hash);
}

export default model('users', userSchema, 'users');