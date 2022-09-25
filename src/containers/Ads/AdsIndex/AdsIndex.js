//Importing the Required Libraries and the Components
import "./main.css";
import React, {useContext, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from '../../../context/UserContext';
import { MdDeleteForever } from 'react-icons/md';
import { MdDownloadDone } from 'react-icons/md';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

//Creating a object as Box
const Box = () => {

    const [show, setShow] = useState(false);
    const { email,address } = useContext(UserContext);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [campaignArray, setCampaignArray] =useState([])
    const [deleteArray, setDeleteArray] =useState([])
    const history = useHistory();

    const [campaignInfo, setCampaignInfo] = useState({
      campaign_name: "",
      campaign_type: "",
      ad_type:"",
      ad_budget_per_day: "",
      bid_strategy:"",
      time_period:"",
      creater_id:""
    });
    //Creating a handleChange function to handle the form submission
    const handleChange = (event) => {
      setCampaignInfo({ ...campaignInfo, [event.target.name]: event.target.value });
    };
    //Creating a clickbox funnction
    const clickedbox=(_id)=>{
      if(deleteArray.includes (_id)){
        setDeleteArray(deleteArray.filter(item => item!==_id))
      }
      else{
      setDeleteArray([...deleteArray,_id])
      }
    }
    //Creating a DeleteAds function to delete the ads
    function deleteAds(){
      console.log(deleteArray);
         axios
         .delete(`http://54.167.69.158:4000/campaign/${address}`,{data:deleteArray})
        .then((response)=>console.log(response))
        .catch((err)=>console.log(err))

        setDeleteArray([]);
        history.push("/campaigns")
    }
    //Creating a handleSubmit function to handle the form submission
    const handleSubmit = () => {
          axios
          .post(`http://54.167.69.158:4000/campaign`,{
              campaign_name:campaignInfo.campaign_name,
              campaign_type:campaignInfo.campaign_type,
              ad_type:campaignInfo.ad_type,
              ad_budget_per_day:campaignInfo.ad_budget_per_day,
              bid_strategy:campaignInfo.bid_strategy,
              time_period:campaignInfo.time_period,
              status:true,
              creater_id:address
          })
          .then((response)=>console.log(response))
          .catch((err)=>console.log(err));

          setCampaignInfo({
          campaign_name: "",
          campaign_type: "",
          ad_type:"",
          ad_budget_per_day: "",
          bid_strategy:"",
          time_period:"",
          creater_id:""
        })

        handleClose();
    };

    useEffect(() => {
      axios({
          method: 'get',
          url: `http://54.167.69.158:4000/campaign/user/${address}`,
        })
          .then((response)=> {
              setCampaignArray(response.data);
          })
          .catch((err)=>console.log(err));

          
    },[,handleSubmit]); 

    let count=1;

  return (
    //Creating a Container Component
    <Container fluid style={{background:"#CCCDCF",height:"80vh",padding:"5vh"}}>
        <div style={{marginTop:"-20px",marginBottom:"15px",display:"flex",flexDirection:"row-reverse"}}>
            <button className="deletebutton" onClick={deleteAds}> <MdDeleteForever/></button>
            <button className="button" variant="primary" onClick={handleShow}>Create Campaign</button>
        </div>
        <div className="box">
             {/*Creating  a table */}
            <div className="table">
                <table>
                    <thead>
                    <tr className="theading">
                        <td>
                            S.No
                        </td>
                        <td>
                            Campaign Name
                        </td>
                        <td>
                            <MdDownloadDone/> 
                        </td>
                        <td>
                            Campaign Type 
                        </td>
                        <td>
                            Ad-type 
                        </td>
                        <td>
                            Ad Budget/Day 
                        </td>
                        <td>
                            Time Period
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {campaignArray.map(({ _id,campaign_name,campaign_type,ad_type,status,time_period,ad_budget_per_day}) => (
                      status=="true"?<tr>
                          <td style={{border:"solid 2px #47B5FF"}}>
                              {count++}
                          </td>
                          <td style={{border:"solid 2px #47B5FF"}}>
                              {campaign_name}
                          </td>
                          <td style={{border:"solid 2px #47B5FF"}}>
                              <input type="checkbox" onClick={()=>clickedbox(_id)}/>
                          </td>
                          <td style={{border:"solid 2px #47B5FF"}}>
                              {campaign_type} 
                          </td>
                          <td style={{border:"solid 2px #47B5FF"}}>
                              {ad_type}
                          </td>
                          <td style={{border:"solid 2px #47B5FF"}}>
                              {ad_budget_per_day} DFT
                          </td>
                          <td style={{border:"solid 2px #47B5FF"}}>
                              {time_period} Days
                          </td>
                      </tr>:null
                    )
                    )}
                    </tbody>

                </table>
            </div>

            {/* <div className="create">
                <h1>+</h1>
                <div style={{marginTop:"-15px"}}>
                    <button className="button" variant="primary" onClick={handleShow}>Create Campaign</button>
                </div>
            </div> */}
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/*Creating title Create Campaigns*/}
          <Modal.Title>Create Campaigns</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/*Creating title Create Campaigns*/}
              <Form.Label>Campaign Name</Form.Label>
              <Form.Control
                type="string"
                placeholder="adidas"
                autoFocus
                name="campaign_name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/*Creating a Label named as Campaign Type*/}
              <Form.Label>Campaign Type</Form.Label>
              <Form.Control
                type="string"
                placeholder="Brand Awareness"
                autoFocus
                name="campaign_type"
                onChange={handleChange}
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/*Creating a Label named as Ad Type*/}
              <Form.Label>Ad Type</Form.Label>
              <Form.Control
                type="string"
                placeholder="Video"
                autoFocus
                name="ad_type"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/*Creating a Label named as Ad Budget/Day*/}
              <Form.Label>Ad Budget/Day</Form.Label>
              <Form.Control
                type="number"
                placeholder="in DFT"
                autoFocus
                name="ad_budget_per_day"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/*Creating a Label named as Time Period*/}
              <Form.Label>Time Period</Form.Label>
              <Form.Control
                type="number"
                placeholder="in days"
                autoFocus
                name="time_period"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/*Creating a Label named as Bid Strategy*/}
              <Form.Label>Bid Strategy</Form.Label>
              <Form.Control
                type="number"
                placeholder="in DFT"
                autoFocus
                name="bid_strategy"
                onChange={handleChange}
              />
            </Form.Group>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
};

export default Box;
