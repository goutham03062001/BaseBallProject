import { Card , Button } from "antd";
import React from "react";
import './EventCard.css';
import { Box } from "@mui/material";
const EventCard = (props) => {
  const event = props.event;
  const key = props.index;
  return (
    <Box key={key} sx={{ width: 'fit-content' , marginBottom: 16 
    , boxShadow: 4, marginRight:10 , padding:'20px' , borderRadius:3
    }}
      
    >
      <div>
        <h2>
          {event.team1} vs {event.team2}
        </h2>
        <p>{event.venue}</p>
        <p>{event.date}</p>
        <p>{event.time}</p>
        <p>{event.result}</p>
        <div className="buttons">

          <Button
            type="primary"
            shape="round"
          >Edit</Button>
          <Button 
            danger
            shape="round"
          >Delete</Button>
        </div>
      </div>
    </Box>
  );
};

export default EventCard;
