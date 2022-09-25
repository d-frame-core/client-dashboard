//Importing the Required Libraries and the Components
import React,  { useEffect, useState } from "react";
import "./main.css";
import { Button, Container } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

//Adding paragraph 
const learnMoreData={
   "a":"Ad-frame is an advertising platform built on D frame, to help clients target users better. Through advanced functionalities like real time target audience analytics with matching interests and a general willingness to watch ads from the users, we hope for significantly higher Click Through Rates (CTR) through AD-frame. This should drastically reduce advertising expenditure for the Clients and help reach the users directly with an ability to offer incentives directly to their wallets. Hence, reliance on Influencers and promotional expenditure can be reduced too. Influencing users not Influences can be a win-win for both client and users but cutting out the middle men.",
   "b":"The Campaign Pricing is decided via the Data Valuation Engine (DVE). This is discussed in Detail in the White Paper. Through general demand-supply dynamics for certain types of Data determined via tags and actual Ad spent, the pricing is calculated. A base price of different data types is set and further calculations are processed. To be explored in the Alpha version. https://dframe.org/d-frame-white-paper-v1-1/",
   "c":" Theoretically, the reach of the campaigns would be determined by the user base of D frame. Overtime, through our Projection frame idea of a Real Time Data Analytics Platform for Clients connecting users for their Healthcare, Travel, Finance data etc. we hope for higher quality and quantity of data & users. Ad-frame would benefit from overall user growth of the D frame data ecosystem.",
   "d":"Payment for the Campaigns would be done via DFT tokens. This is one of the major utlity of the DFT tokens, to get access to user data, with their permission. At the Alpha Release stage, we may decide to offer support for high volume Crypto. tokens like Stablecoins, Bitcoin, Ethereum etc. This is subject to the release and would be decided then.",
}


const LearnIndex = () => {
   const [show, setShow] = useState(false);
   const [learnContent,setLearnContent] = useState("");
   const [learnQuestion,setLearnQuestion]= useState("");

   const handleClose = () => setShow(false);
   const handleShow = (userInputValue) => {
   
   if(userInputValue==='a'){
      setLearnContent(learnMoreData.a)
      setLearnQuestion("Why advertise on D-Frame?")
   }else if(userInputValue==='b'){
      setLearnContent(learnMoreData.b)
      setLearnQuestion(" How does the campaigns pricing work ?")
   }else if(userInputValue==='c'){
      setLearnContent(learnMoreData.c)
      setLearnQuestion("What is the reach our campaigns ?")
   }else if(userInputValue==='d'){
      setLearnContent(learnMoreData.d)
      setLearnQuestion("How do you pay for the campaigns ?")
   }
      setShow(true);
   }

   const [showFaq, setShowFaq] = useState(false);
   const handleCloseFaq = () => setShowFaq(false);
   const handleShowFaq = () => setShowFaq(true)

   useEffect(() => {
      console.log("clicked")
      },[handleShow])

  return (
   //Importing the Required Libraries and the Components
   <Container fluid style={{background:"#CCCDCF",height:"80vh",padding:"5vh"}}>
        <div className="box" >
         <div className="info">
            <div onClick={()=>handleShow('a')} style={{fontSize:"25px",cursor: "pointer",padding:"10px 3px",width:"70%",marginLeft:"15%",borderRadius:"5px",background:"#CCCDCF"}}>
               Why advertise on D-Frame? 
            </div>
         </div>
         <div className="info">
            <div onClick={()=>handleShow('b')} style={{fontSize:"25px",cursor: "pointer",padding:"10px 3px",width:"70%",marginLeft:"15%",borderRadius:"5px",background:"#CCCDCF"}}>
               How does the campaigns pricing work ?
            </div>
         </div>
         <div className="info">
            <div onClick={()=>handleShow('c')} style={{fontSize:"25px",cursor: "pointer",padding:"10px 3px",width:"70%",marginLeft:"15%",borderRadius:"5px",background:"#CCCDCF"}}>
               What is the reach our campaigns ? 
            </div>
         </div>
         <div className="info">
            <div onClick={()=>handleShow('d')} style={{fontSize:"25px",cursor: "pointer",padding:"10px 3px",width:"70%",marginLeft:"15%",borderRadius:"5px",background:"#CCCDCF"}}>
               How do you pay for the campaigns ?
            </div>
         </div>
         <div className="info">
            <div onClick={handleShowFaq} style={{fontSize:"25px",cursor: "pointer",padding:"10px 3px",width:"70%",marginLeft:"15%",borderRadius:"5px",background:"#CCCDCF"}}>
               FAQ 
            </div>
         </div>
        </div>

        <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>{learnQuestion}</Modal.Title>
         </Modal.Header>
         <Modal.Body>{learnContent}</Modal.Body>
         <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
               Close
            </Button>
         </Modal.Footer>
         </Modal>

         <Modal show={showFaq} onHide={handleCloseFaq}>
         <Modal.Header closeButton>
            <Modal.Title>FAQ</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            {/*Writing answers for the Question */}
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

export default LearnIndex;
