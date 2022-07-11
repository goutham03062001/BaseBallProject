import { Card , Button } from "antd";
import React from "react";
import {useState, useEffect} from 'react';
import {  Modal ,Form,Input,DatePicker,Space, TimePicker} from 'antd';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import './EventCard.css';
import { Box } from "@mui/material";
const EventCard = (props) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const[eventName,setEventName] = useState("");
  const[organizationName,setOrganizationName] = useState("");
  const[organisers,setOrganisers] = useState("");
  const[eventDate,setEventDate] = useState("");
  const[eventTime,setEventTime] = useState("");
  const[venueLocation,setVenueLocation] = useState("");
  const[teamName,setTeamName] = useState("");
  const[teamMembers,setTeamMembers]=useState("");
  const[teamCoach,setTeamCoach] = useState("");
  const[teamCaptain,setTeamCaptain]=useState("");
  const[refree,setRefree]=useState("");
  const[description,setDescription]=useState("");
  const [Events,setEvents] = useState([]);
  const [eventTeams,setEventTeams] = useState([]);
  const [eventMatchSequence,setEventMatchSequence] = useState("");
  const [updateVisible, setupdateVisible]=useState(false);
  const {RangePicker} = DatePicker;
  const {TextArea} = Input; 
  const event = props.event;
  const key = props.index;
  console.log("Event data in card component is",event);
  const showModal = () => {
    setupdateVisible(true);
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
    // let org  = [];
    // // org = organisers.split(",");
    // setOrganisers(org);
    // // for(let i=0;i<mem.length;i++)
    // // {
    // //     team[i]=mem[i];
    // // }
    // let refr=[];
    // // refr=refree.split(",");
    // setRefree(refr);
    updateEvent(eventTime);
  };

  const handleCancel = () => {
    setupdateVisible(false);
  };


  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };
  
  const onOk = (value) => {
    console.log('onOk: ', value);
  };



  async function updateEvent(op){

    if (typeof refree === 'string' || refree instanceof String)
    var newrefree=refree.split(",");
    if (typeof organisers === 'string' || organisers instanceof String)
   var neworganisers = organisers.split(",");
    console.log("update Event called");
    await axios.post("/Events/updateEvent",{
      op:op,
      data:{
        _id:event._id,
      Eventname: eventName,
          Organisation: organizationName,
          Organisers:neworganisers,
          Schedule:{
              DateTo: eventDate || "Not defined" ,
             DateFrom:eventDate || "Not defined" ,
              TimeFrom:eventTime|| "Not defined" ,
              TimeTo:eventTime || "Not defined" ,
          },
          VenueLocation:venueLocation || "Not defined" ,
          Teams:eventTeams || ["Not defined"] ,
          MatchSequence:eventMatchSequence|| "Not defined" ,
          Refrees:newrefree|| ["Not defined"] ,
          Description:description || "Not defined" ,
        }
    })
    .then(res=>{
  
    }).catch(error=>{
      console.log("error while updating event",error);
    })
    }
   
  







  return (
    <Box key={key} sx={{ width: 'fit-content' , marginBottom: 16 
    , boxShadow: 4, marginRight:10 , padding:'20px' , borderRadius:3
    }}
      
    >
      <div>
        <h2>
          {event.Eventname}
        </h2>
        <p> at {event.VenueLocation}</p>
        <p>{event.Schedule.DateTo} - {event.Schedule.DatFrom}</p>
        <p>{event.Schedule.TimeTo}</p>
        <p>Number of Teams : {event.Teams.length}</p>
        <div className="buttons">

          <Button
            type="primary"
            shape="round"
            onClick={(e)=>{
              showModal("updateEvent");
              // setupdateVisible(true);
            }}
          >Edit</Button>
          <Button 
            danger
            shape="round"
            onClick={(e)=>{
              updateEvent("deleteEvent");
            }}
          >Delete</Button>
        </div>
      </div>
      <Modal
        visible={updateVisible}
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
    <div className="FormData-TeamWrapper">
    <Form.Item label="Team Details" style={{ width:'60%' }}>
        <Input placeholder='Team Name' onChange={(e)=>(setTeamName(e.target.value))} id="TeamNameId"  />
        <Input placeholder='Team Members' onChange={(e)=>(setTeamMembers(e.target.value))}  id="TeamMembersId" />
        <Input placeholder='Team Coach' onChange={(e)=>(setTeamCoach(e.target.value))}  id="TeamCoachesId"  />
        <Input placeholder='Team Captain' onChange={(e)=>(setTeamCaptain(e.target.value))} id="TeamCaptainId" />
    </Form.Item>
    <div className="FormData-TeamAddButton">
      <Button onClick={(e)=>{
        var newName=teamName;
        var newCoaches=teamCoach.split(",");
        var newMembers = teamMembers.split(",");
        var newCaptain=teamCaptain;
        var NewTeam={
          Name:newName,
          Coaches:newCoaches,
          Members:newMembers,
          Captain:newCaptain,
        }
        eventTeams.push(NewTeam);
        console.log("Teams=",eventTeams);
        var x = document.getElementById("TeamNameId").value="";
        x = document.getElementById("TeamMembersId").value="";
        x = document.getElementById("TeamCoachesId").value="";
        x= document.getElementById("TeamCaptainId").value="";
      }} >
        Add Team</Button>
    </div>
    </div>
    <Form.Item label="Refrees">
        <Input placeholder='Enter the refree name' onChange={(e)=>(setRefree(e.target.value))}/>
    </Form.Item>
    <Form.Item label="Description">
        <TextArea rows={5} placeholder="Please add some description here.."
        onChange={(e)=>(setDescription(e.target.value))}/>
    </Form.Item>
  
        
      
        </Form>
      </Modal>
    </Box>
  );
};

export default EventCard;
