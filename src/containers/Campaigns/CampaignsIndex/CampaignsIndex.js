//Importing the Required Libraries and the Components
import React, {useContext, useEffect, useState} from "react";
import { UserContext } from '../../../context/UserContext';
import { Container } from "react-bootstrap";
import "./campaigns.css";
import { BsPlusLg } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

//Creating a object as CampaignsIndex
const CampaignsIndex = () => {

    const [show, setShow] = useState(false);
    const {address } = useContext(UserContext);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [campaignArray, setCampaignArray] =useState([])

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
    //Creating a HandleSubmit function to handle the form submission
    const handleSubmit = () => {
          axios
          .post(`http://54.167.69.158:4000/campaign`,{
              campaign_name:campaignInfo.campaign_name,
              campaign_type:campaignInfo.campaign_type,
              ad_type:campaignInfo.ad_type,
              ad_budget_per_day:campaignInfo.ad_budget_per_day,
              bid_strategy:campaignInfo.bid_strategy,
              time_period:campaignInfo.time_period,
              status:false,
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
          });
    },[,handleSubmit]);


  return (
    <Container fluid style={{background:"#CCCDCF",height:"80vh",padding:"5vh"}}>
        <div style={{marginTop:"-20px",marginBottom:"15px"}}>
            <button className="button" variant="primary" onClick={handleShow}><strong><BsPlusLg/></strong> Create</button>
        </div>

        <div className="box"> 
            <div className="table">
              {/*Creating  a table */}
                <table>
                    <thead>
                        <td>
                            Campaign Name
                        </td>
                        <td>
                            Campaign Type  
                        </td>
                        <td>
                            Bid strategy 
                        </td>
                        <td>
                            Budget 
                        </td>
                        <td>
                            Type 
                        </td>
                        <td>
                            Time 
                        </td>
                    </thead>
                    <tbody>
                    {campaignArray.map(({ campaign_name,campaign_type,ad_type,status,time_period,bid_strategy,ad_budget_per_day}) => (
                      status=="false"?<tr>
                          <td style={{border:"solid 2px #47B5FF"}}>
                              {campaign_name}
                          </td>
                          <td style={{border:"solid 2px #47B5FF"}}>
                              {campaign_type} 
                          </td>
                          <td style={{border:"solid 2px #47B5FF"}}>
                              {bid_strategy} DFT
                          </td>
                          <td style={{border:"solid 2px #47B5FF"}}>
                              {time_period*ad_budget_per_day} DFT
                          </td>
                          <td style={{border:"solid 2px #47B5FF"}}>
                              {ad_type} 
                          </td>
                          <td style={{border:"solid 2px #47B5FF"}}>
                              {time_period} 
                          </td>
                      </tr>:null
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/*Creating title Create Campaigns*/}
          <Modal.Title>Create Campaigns</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/*Creating a Label named as Campaign Name*/}
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
                min="1"
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
                min="1"
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
                min="1"
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
//Exporting the CampaignsIndex Component
export default CampaignsIndex;
