import mongoose from "mongoose";

const EventSchemaX= new mongoose.Schema({
    Eventname: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    Organisation: {
        type: String,
        required:false
    },
    Organisers:{
        type:[String]   
    },
    Schedule:{
        DateTo:{
            type: String,
            required:true
        },
        DateFrom:{
            type: String,
            required:true
        },
        TimeFrom:{
            type: String,
            required:true
        },
        TimeTo:{
            type: String,
            required:true
        }
    },
    VenueLocation:{
        type: String,
        required:true
    },
    Teams:[
        {
            Name:{
                type: String,
                required:true
            },
            Members:{
                type:[String]
            },
            Coaches:{
                type:[String]
            },
            Captain:{
                type: String
            }

        },
    ],
    MatchSequence:{
        type: String,
    },
    Refrees:{
        type:[String]
    },
    Description:{
        type: String
    }
});

const EventSchema = mongoose.model('BBL_EventSchema',EventSchemaX);
export default EventSchema;