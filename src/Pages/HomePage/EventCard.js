import { Card , Button ,Modal} from "antd";
import React from "react";
import './EventCard.css';

const EventCard = (props) => {
  const event = props.event;
  const key = props.index;
  const[visible,setVisible] = useState(false);
  const showModel=()=>{
    setVisible(true);
  }
  return (
    <Card key={key} style={{ width: 300 , marginBottom: 16 }}
      
    >
      <div onClick={showModel}>
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
      <Modal visible={visible}>
        <h3>{event.team1} vs {event.team2}</h3>
        <br/>
        <p>{event.venue}</p>
        <p>{event.date}</p>
        <p>{event.time}</p>
        <p>{event.result}</p>
        <p>{event.refree}</p>
        
        <p>{event.description}</p>
        <Button onClick={e=>setVisible(false)}>Close Me</Button>
      </Modal>
    </Card>
  );
};

export default EventCard;
