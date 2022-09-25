//Importing the Required Libraries and the Components
import styles from "./DataContentStyle.css";
import React, { useCallback, useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Container, Row,Col, Button } from "react-bootstrap";
import { Input } from "@material-ui/core";
import axios from "axios";

//Declaring the Values for the data sets
const data1 = [
  { name: "a", value: 270 },
  { name: "b", value: 360 },
  { name: "c", value: 370 },
];


const COLORS = ["#b5473f","#6c6bc2","#3eb54a","#baa806","#78066b","#8c5307","#037330"];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
//Creating the Object as DataContent
const DataContent = () => {
  const [myArray, updateMyArray] = useState([]);
  const [tag,setTag] = useState("");
  const [data,setData] = useState(data1);
  //Creating the function HandleChange
  const handleChange = (event) => {
    setTag(event.target.value );
    console.log(tag)
  };
  //Creating the function OnClickUpdate to update the data
  const onClickUpdate = () => {
    updateMyArray( arr => [...arr, `${tag}`]);
    setTag("");
};

//Assigning the data to the data set
  const assignData= (category) => {
    if(category==="gender"){
      axios.get(`http://54.167.69.158:5000/data-pool/gender`)
      .then((res)=>setData(res.data))
      .catch((err)=>setData(err))
      
    }else if(category==="age"){
      axios.get("http://54.167.69.158:5000/data-pool/age")
      .then((res)=>setData(res.data))
      .catch((err)=>setData(data1))
      //setData(data2)
    }else if(category==="income"){
      axios.get("http://54.167.69.158:5000/data-pool/income")
      .then((res)=>setData(res.data))
      .catch((err)=>setData(data1))
      //setData(data3)
    }
    else if(category==="sports"){
      axios.get("http://54.167.69.158:5000/data-pool/sports")
      .then((res)=>setData(res.data))
      .catch((err)=>setData(data1))
      //
      

      setData(data1)
    }else if(category==="crypto"){
      axios.get("http://54.167.69.158:5000/data-pool/crypto")
      .then((res)=>setData(res.data))
      .catch((err)=>setData(data1))
    }
    else if(category==="ecommerce"){
      axios.get("http://54.167.69.158:5000/data-pool/ecommerce")
      .then((res)=>setData(res.data))
      .catch((err)=>setData(data1))
    }
    else if(category==="social"){
      axios.get("http://54.167.69.158:5000/data-pool/social")
      .then((res)=>setData(res.data))
      .catch((err)=>setData(data1))
    }
  }

  useEffect(() => {
    
  },[assignData]); 

  useEffect(() => {
    assignData("gender")
  },[]); 

  return (
    <Container fluid style={{background:"#CCCDCF",height:"80vh"}}>
      {/*Creating Rows and Columns*/}
      <Row noGutters={true} className="dataButtons" >
        <Col>
          <button autoFocus onClick={()=>assignData("gender")} className="dataButton" style={{width:"100%",border:"2px solid #1B3BE3",borderRadius:"0"}}>Gender</button>
        </Col>
        <Col>
          <button className="dataButton" onClick={()=>assignData("age")} style={{width:"100%",border:"2px solid #1B3BE3",borderRadius:"0"}}>Age</button>
        </Col>
        <Col>
          <button className="dataButton" onClick={()=>assignData("income")} style={{width:"100%",border:"2px solid #1B3BE3",borderRadius:"0"}}>Income</button>
        </Col>
        <Col>
          <button className="dataButton" onClick={()=>assignData("sports")} style={{width:"100%",border:"2px solid #1B3BE3",borderRadius:"0"}}>Sports</button>
        </Col>
        <Col>
          <button className="dataButton" onClick={()=>assignData("crypto")} style={{width:"100%",border:"2px solid #1B3BE3",borderRadius:"0"}}>Crypto</button>
        </Col>
        <Col>
          <button className="dataButton" onClick={()=>assignData("ecommerce")} style={{width:"100%",border:"2px solid #1B3BE3",borderRadius:"0"}}>E-Commerce</button>
        </Col>
        <Col>
          <button className="dataButton" onClick={()=>assignData("social")} style={{width:"100%",border:"2px solid #1B3BE3",borderRadius:"0"}}>Social Media</button>
        </Col>
      </Row>
        <Row style={{padding:"0 5vh"}} no-gutters={true}>
          <Col xs={6}>
          <div style={{marginLeft:"10%"}}>
                <div className="dft">
                    <h4>Size of D-Frame Data Pool</h4>
                    <h3 style={{color:"#1e81b0"}}>105.91K</h3>
                </div>
                <div className="addTag">
                    <h3>Add Tags</h3>
                    <div style={{display:"flex", marginLeft:"5%"}}>
                    <Input type="text" name="tag" value={tag} onChange={handleChange} style={{background:"white",width:"100%",padding:"0 20px",borderRadius:"5px 0 0 5px"}} />
                    <Button onClick={ onClickUpdate }  variant="primary" style={{width:"20%",fontSize:"30px"}}>+</Button>
                    </div>
                    
                </div>
              </div>
          </Col>

          <Col xs={3}  >
          <div className="box1">
                {/*Creating  Piechart */}
                <PieChart width={400} height={250} className="pie">
                  <Pie
                    data={data}
                    cx={120}
                    cy={115}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
                  
                </div>
          </Col>
              
          <Col xs={3}>
            <div className="databox4">
            {data.map(({name,value},i)=>{
             return <div style={{fontSize:"20px",margin:"5px"}}><input style={{height:"20px",width:"17px",background:COLORS[i],border:"white",margin:"0 5px", borderRadius:"5px"}}/>{name} - <span style={{color:"blue",fontSize:"20px"}}>{value}</span></div>
          })}
              </div>
          </Col>
        </Row>

        <Row>
          <Col>
          <div xs={6} className="databox2">
                <button className="button">Children</button>
                {myArray.map( e =>
                  <button className="button">{ e }</button>
                )}
              </div>
          </Col>
          <Col xs={6}>
          <div className="databox2">
              <h4 style={{marginTop:"0px",marginLeft:"10px"}}>Most Shared Tags</h4>
                <button className="button">Football</button>
                <button className="button">Bollywood</button>
                <button className="button">Hospitals</button>
                <button className="button">Covid 19</button>
                <button className="button">Drama</button>
                <button className="button">News</button>
              </div>  
          </Col>
        </Row>

    </Container>
  );
};
//Exporting the DataContent component
export default DataContent;
