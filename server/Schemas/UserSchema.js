import mongoose from "mongoose";

const UserSchemaX= new mongoose.Schema({
    UserName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
        trim: true,
        unique:false
    },
    Email: {
        type: String,
        required: true,
    },
    Mobile: {
        type: String,
        required: true,
    },
    Organisation: {
        type: String,
        required:false
    }
});

const UserSchema = mongoose.model('BBL_UserSchema',UserSchemaX);
export default UserSchema;