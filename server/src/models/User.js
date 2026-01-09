import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true 
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
        select: false
    },
    role:{
        type: String,
        enum: ["ADMIN","USER"],
        default: "USER"
    },
    refreshToken:{
        type: String
    }
},
{ timeseries: true });

userSchema.pre("save", async function(){
    if(!this.isModified("password")) return
    
    this.password = bcrypt.hash(this.password, 12)
})

userSchema.methods.comparePassword = async (enteredPassword) => {
    return await bcrypt.compare(enteredPassword,this.password)
}

const User = new mongoose.model("User",userSchema)
export default User