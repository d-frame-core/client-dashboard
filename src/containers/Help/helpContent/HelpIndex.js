//Importing the Required Libraries and the Components
import React,{useState} from "react";
import { Button, Container } from "react-bootstrap";
import  "./Index.css";
import Modal from 'react-bootstrap/Modal';

//Creating a Object as HelpIndex
const HelpIndex = () => {
   const [showFaq, setShowFaq] = useState(false);
   const [showRead, setShowRead] = useState(false);

   const handleCloseFaq = () => setShowFaq(false);
   const handleShowFaq = () => setShowFaq(true)

   const handleCloseRead = () => setShowRead(false);
   const handleShowRead = () => setShowRead(true)

  return (
   //Creating a Container to hold the Help components
    <Container fluid style={{background:"#CCCDCF",height:"80vh",padding:"5vh"}}>
        <div className="box">
         <div className="info">
            <div onClick={handleShowRead} style={{fontSize:"25px", cursor: "pointer", padding:"10px 3px",width:"70%",marginLeft:"15%",borderRadius:"5px",background:"#CCCDCF"}}>
                Read More
            </div>
         </div>
         <div className="info">
            <div style={{fontSize:"25px",padding:"10px 3px",width:"70%",marginLeft:"15%",borderRadius:"5px",background:"#CCCDCF"}}>
                Privacy Policy
            </div>
         </div>
         <div className="info">
            <div style={{fontSize:"25px",padding:"10px 3px",width:"70%",marginLeft:"15%",borderRadius:"5px",background:"#CCCDCF"}}>
                Support 
            </div>
         </div>
         <div className="info">
            <div style={{fontSize:"25px",padding:"10px 3px",width:"70%",marginLeft:"15%",borderRadius:"5px",background:"#CCCDCF"}}>
                Terms of Service
            </div>
         </div>
         <div className="info">
            <div onClick={handleShowFaq} style={{fontSize:"25px", cursor: "pointer", padding:"10px 3px",width:"70%",marginLeft:"15%",borderRadius:"5px",background:"#CCCDCF"}}>
               FAQ
            </div>
         </div>
        </div>

        <Modal show={showRead} onHide={handleCloseRead}>
         <Modal.Header closeButton>
            <Modal.Title>Read More</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <div className="d-grid gap-2">
         <Button href="https://dframe.org/presentation/" target="_blank" variant="primary" size="lg" style={{width:"100%"}}>
            Presentation
         </Button><br/><br/>
         <Button href="https://dframe.org/d-frame-white-paper-v1-1" target="_blank" variant="secondary" size="lg" style={{width:"100%"}}>
            WhitePaper
         </Button>
         </div>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="primary" onClick={handleCloseRead}>
               Close
            </Button>
         </Modal.Footer>
         </Modal>

        <Modal show={showFaq} onHide={handleCloseFaq}> 
         <Modal.Header closeButton>
            <Modal.Title>FAQ</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            {/*Answers for FAQs */}
         <strong>1. Where is D frame Registered?<br/></strong>
         1. The D frame Foundation is registered in the Hague, Netherlands. <br/>

         <strong>2. What is D frame?<br/></strong>
         2.  D-frame is a decentralised data ecosystem to help people monetise their personal data with privacy, 
         support businesses with dynamic value laden data and encourage developers to build for re-imagining the data ecosystem. 
         Using Blockchain based smart contracts for trust and a D-frame token for value generation & distribution, the ecosystem 
         aspires to be a community driven sustainable effort.<br/>

         <strong>3.What is Ad frame? <br/></strong>
         3. Ad-frame is an advertising platform built on D frame, to help clients target users better. 
         Through advanced functionalities like real time target audience analytics with matching interests and a general 
         willingness to watch ads from the users, we hope for significantly higher Click Through Rates (CTR) through AD-frame.<br/>

         <strong>4. How many users does D frame have?<br/></strong>
         4. Currently, D frame is at the prototype stage. Further, we would plan for an Alpha release for 50,000 to 100,000 users. 
         Long term, a user base of atleast 10 million plus users is targeted.<br/>

         <strong>5. How many Clients use D frame? How can Clients be successful on D frame? <br/></strong>
         5. Currently, D frame is at the Prototype stage and we do not have active partnership with any client. 
         However, we are pursuing partnerships with some of the largest Advertising firms in the world.<br/>

         <strong>6. How does D frame compare to other Advertising platforms?<br/></strong>
         6. D frame shows an active data pool size of all the relevant users. 
         Further, User's are willing to view advertisements for making passive income for sharing their data. 
         Finally, we would be working on integration with different metaverse platforms.<br/>

         <strong>7. How much money do users make?<br/></strong>
         7.Currently, we hope to atleast share 50% of the revenue generated directly with the users. 
         Based on community feedback and stakeholder dynamics, these numbers will evolve.

         </Modal.Body>
         <Modal.Footer>
            <Button variant="primary" onClick={handleCloseFaq}>
               Close
            </Button>
         </Modal.Footer>
         </Modal>
    </Container>
  );
};

export default HelpIndex;
