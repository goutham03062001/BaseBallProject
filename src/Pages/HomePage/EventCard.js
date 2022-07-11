import { Card , Button } from "antd";
import React from "react";
import './EventCard.css';

const EventCard = (props) => {
  const event = props.event;
  const key = props.index;
  return (
    <Card key={key} style={{ width: 300 , marginBottom: 16 }}
      
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
    </Card>
  );
};

export default EventCard;
