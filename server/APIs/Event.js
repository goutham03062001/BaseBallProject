import { LocalCafe } from '@mui/icons-material';
import express, { response } from 'express';
import EventSchema from '../Schemas/EventSchema.js';

const EventRouter = express.Router();

EventRouter.post('/saveEvent', async(req,response)=>{
    try{
        const Event  = req.body;
        const NewEventSchema = new EventSchema(Event);
        await NewEventSchema.save(Event);
        response.status(200).send("Saved");
        console.log("Event saved successfully", Event);
}
catch(err){
    response.status(500).send("Error: " + err.message);
    console.log("Error saving Event",err);
}

});

EventRouter.get('/getEvents/:Organiser', async(req,response)=>{
    await EventSchema.find({Organisers:req.params.Organiser})
    .then(res=>{
        console.log("Fetched events for user ",req.params.Organiser,"-> ",res);
        response.status(200).send(res)
    })
    .catch(err=>{
        response.status(500).send("Error: " + err.message);
            console.log("Error while getting events: " + err);   
    })
})

EventRouter.post('/updateEvent', async(req,response)=>{
    try{
       if(req.body.op==="updateEvent"){
           await EventSchema.updateOne({_id:req.body.data._id},{$set:req.body.data})
           .then(res=>{
            response.status(200).send("Updated event");
            console.log("Event updated successfully", req.body);
           })
           .catch(err=>{
              response.status(500).send("Error: " + err.message);
              console.log("Error updating Event",err);
           })
       }
       else if(req.body.op==="deleteEvent"){
          await EventSchema.deleteOne({_id:req.body.data._id})
          .then(res=>{
          response.status(200).send("Deleted event");
          console.log("Event deleted successfully", req.body,res);
       })
       .catch(err=>{
       response.status(500).send("error while deleting event",err);
       console.log("Error deleting Event",err);
       });
    }
}
    catch(err){
    response.status(500).send("Error: " + err.message);
    console.log("Error updating Event",err);
    }
});


export default EventRouter