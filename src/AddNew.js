import { Button, Modal ,Form,Input,DatePicker,Space, TimePicker} from 'antd';
import React, { useState } from 'react';
const {RangePicker} = DatePicker;
const {TextArea} = Input; 
const App = () => {
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
  return (
    <>
      <Button type="primary" onClick={showModal}>
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
    </>
  );
};

export default App;