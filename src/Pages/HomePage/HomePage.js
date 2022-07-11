import React from "react";
import EventCard from "./EventCard";
import './Homepage.css'
import { useState, useEffect } from "react";
import { Button, Modal ,Form,Input,DatePicker,Space, TimePicker} from 'antd';
import axios from "axios";
import { useParams } from "react-router-dom";


const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const[eventName,setEventName] = useState("");
  const[organizationName,setOrganizationName] = useState("");
  const[organisers,setOrganisers] = useState([]);
  const[eventDate,setEventDate] = useState("");
  const[eventTime,setEventTime] = useState("");
  const[venueLocation,setVenueLocation] = useState("");
  const[teamName,setTeamName] = useState("");
  const[teamMembers,setTeamMembers]=useState("");
  const[teamCoach,setTeamCoach] = useState("");
  const[teamCaptain,setTeamCaptain]=useState("");
  const[refree,setRefree]=useState([]);
  const[description,setDescription]=useState("");
  const [Events,setEvents] = useState([]);

  const {RangePicker} = DatePicker;
  const {TextArea} = Input; 
  
  const TestEvents = [
    {
      team1: "team1",
      team2: "team2",
      venue: "venue",
      date: "date",
      time: "time",
      result: "result",
    },
    {
      team1: "team1",
      team2: "team2",
      venue: "venue",
      date: "date",
      time: "time",
      result: "result",
    },
    {
      team1: "team1",
      team2: "team2",
      venue: "venue",
      date: "date",
      time: "time",
      result: "result",
    },
    {
      team1: "team1",
      team2: "team2",
      venue: "venue",
      date: "date",
      time: "time",
      result: "result",
    },
    {
      team1: "team1",
      team2: "team2",
      venue: "venue",
      date: "date",
      time: "time",
      result: "result",
    },
    {
      team1: "team1",
      team2: "team2",
      venue: "venue",
      date: "date",
      time: "time",
      result: "result",
    },
    {
      team1: "team1",
      team2: "team2",
      venue: "venue",
      date: "date",
      time: "time",
      result: "result",
    },
  ];
  
  const params=useParams();
const UserName=params.UserName;

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
    console.log(eventName);
    console.log(organizationName);
    console.log(organisers);
    console.log(eventDate);
    console.log(eventTime);
    console.log(description);
    console.log(teamMembers);
    let team = [];
    let mem = teamMembers.split(",")
    // for(let i=0;i<mem.length;i++)
    // {
    //     team[i]=mem[i];
    // }
    console.log(mem);
    setTeamMembers(mem);
  };

  const handleCancel = () => {
    setVisible(false);
  };


  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };
  
  const onOk = (value) => {
    console.log('onOk: ', value);
  };

  useEffect(()=>{
  axios.get('Events/getEvents' ,{Organiser:UserName})
  .then(res=>{
    if(Array.isArray(res) && res.length)
    setEvents(res);
    else setEvents(TestEvents);
    console.log('Fetched Events: ', res);
  })
  .catch(err=>{
   console.log('Error while fetching events: ', err);
  })
  },[]);



  return (
    <div className="Account-Wrapper">
      
      <div className="Account-Header-Wrapper">
        
        <Button type="primary" onClick={showModal} className="AddNewEventButtonWrapper"    >
        Add New Event
      </Button>
      <Modal
        visible={visible}
        title="NEW EVENT"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          
        ]}
      >
        
        <Form>
        <Form.Item label="Event Name" name="requiredMarkValue">
        <Input placeholder="Enter Your Event Name" 
        onChange={(e)=>(setEventName(e.target.value))}/>
        </Form.Item>
        <Form.Item label="Organization Name">
        <Input placeholder="Enter Your Organization Name" 
        onChange={(e)=>(setOrganizationName(e.target.value))}/>
        </Form.Item>

        <Form.Item label="Organisers">
        <Input placeholder="Organisers names" 
        onChange={(e)=>(setOrganisers(e.target.value))}/>
        </Form.Item>
        <Form.Item label="Shedule Your Meetings">
        <Space direction="vertical" size={12}>
        <RangePicker
        onChange={(e)=>(setEventDate(e.target.value))}/>
        
        <TimePicker
        onChange={(e)=>(setEventTime(e.target.value))}/>
    
    </Space>
    </Form.Item>
    <Form.Item label="Venue Location">
        <Input placeholder='Enter your venue location'
        onChange={(e)=>(setVenueLocation(e.target.value))}/>
    </Form.Item>
    <Form.Item label="Team Details">
        <Input placeholder='Team Name' onChange={(e)=>(setTeamName(e.target.value))}/>
        <Input placeholder='Team Members' onChange={(e)=>(setTeamMembers(e.target.value))}/>
        <Input placeholder='Team Coach' onChange={(e)=>(setTeamCoach(e.target.value))}/>
        <Input placeholder='Team Captain' onChange={(e)=>(setTeamCaptain(e.target.value))}/>
    </Form.Item>
    <Form.Item label="Refrees">
        <Input placeholder='Enter the refree name' onChange={(e)=>(setRefree(e.target.value))}/>
    </Form.Item>
    <Form.Item label="Description">
        <TextArea rows={5} placeholder="Please add some description here.."
        onChange={(e)=>(setDescription(e.target.value))}/>
    </Form.Item>
  
        
      
        </Form>
      </Modal>
      </div>
      <h1 style={{marginBottom:'7vh'  , marginTop:'4vh'  }}>League Matches</h1>
        <div className="Account-Body">
        {Events.map((event, index) => {
          return <EventCard key={index} event={event} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
