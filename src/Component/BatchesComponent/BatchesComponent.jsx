import axios from "axios";
import React from "react";
import './BatchesComponent.css';
import {  MDBCard, MDBCardBody, MDBIcon,MDBContainer } from "mdb-react-ui-kit";
import { MDBAnimation, } from "mdbreact";


export default class Batches extends React.Component{
    constructor(){
        super()
        this.state={
            name:"batches",
            batch_Name:'',
            batch_Trainer_Name:'',
            batch_Core:'',
            batch_Time:'',
            batch_Strength:'',
            batch_Created_Person:'',
            batch_created_Date:'',
            batch_End_Date:'',
        }

    }
    registerInputValues=(event)=>{
        this.setState({[event.target.id]: event.target.value})
    }
    registerSubmit=()=>{
        console.log("coming .......")
        let json={
            "batch_Name":this.state.batch_Name,
            "batch_Trainer_Name":this.state.batch_Trainer_Name,
            "batch_Core":this.state.batch_Core,
            "batch_Time":this.state.batch_Time,
            "batch_Strength":this.state.batch_Strength,
            "batch_Created_Person":this.state.batch_Created_Person,
            "batch_created_Date":this.state.batch_created_Date,
            "batch_End_Date":this.state.batch_End_Date
            
        }
        console.log("after json coneing......");
        axios.post("http://localhost:8080/Batches/save",json).then(    
            (res)=>{
           console.log(res)
            }
            ) 
            }
            changeStaet=()=>{
        
                console.log("clicking");
                this.setState({name:'batches'})
            }
            render(){
                const overlay = (
                    <div
                      style={{ backgroundColor: "transparent" }}
                    />
                  );
                return(<div className="container">
                    <MDBContainer>
                        <MDBAnimation  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                
                    <div style={{backgroundImage: 'url("Background.jpg")', className:"img-fluid"  }}>
                    <div className="cards">
                  
                  
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> BATCHES:
                        </h3>
                     <form>
                       
                        
                
                <div className="row align-items-center py-3">
<div className="col-md-3 ps-5">
<label>Batch Name</label>
</div>
<div className="col-md-9 pe-5">
<input placeholder="Enter Batch name" type="text"  id='batch_Name' onChange={this.registerInputValues} required/>
</div>
</div>

<div className="row align-items-center py-3">
<div className="col-md-3 ps-5">
<label>Trainer Number</label>
</div>
<div className="col-md-9 pe-5">
<input placeholder="Enter Trainer name" type="text"  id='batch_Trainer_Name' onChange={this.registerInputValues} required/>
</div>
</div>
<div className="row align-items-center py-3">
<div className="col-md-3 ps-5">
<label>Course</label>
</div>
<div className="col-md-9 pe-5">
<input placeholder="Enter Batch Course Name" type="tex" id='batch_Core' onChange={this.registerInputValues} required/>
</div>
</div>
<div className="row align-items-center py-3">
<div className="col-md-3 ps-5">
<label>Batch Time</label>
</div>
<div className="col-md-9 pe-5">
<input placeholder="Enter Batch time" type="text" id='batch_Time' onChange={this.registerInputValues} required/>
</div>
</div>
<div className="row align-items-center py-3">
<div className="col-md-3 ps-5">
<label>Batch strength</label>
</div>
<div className="col-md-9 pe-5">
<input placeholder="Enter Batch strength" type="number" id='batch_Strength' onChange={this.registerInputValues} required/>
</div>
</div>
<div className="row align-items-center py-3">
<div className="col-md-3 ps-5">
    <label>Batch Creator</label>
    </div>
    <div className="col-md-9 pe-5">
<input placeholder="Enter the name of batch councellor" type="text" id='batch_Created_Person' onChange={this.registerInputValues} required/>
</div>
</div>
<div className="row align-items-center py-3">
<div className="col-md-3 ps-5">
<label>Batch Created date</label>
</div>
<div className="col-md-9 pe-5">
<input placeholder="Enter the batch starting date" type="Date" id='batch_created_Date' onChange={this.registerInputValues} required/>
</div>
</div>
<div className="row align-items-center py-3">
<div className="col-md-3 ps-5">
<label>Ending date of batch</label>
</div>
<div className="col-md-9 pe-5">
<input placeholder="Enter the last date of batch" type="Date" id='batch_End_Date' onChange={this.registerInputValues} required/>
</div>
</div>
</form>
<button className="sub-btn"  onClick={this.registerSubmit}>Submit</button>
</MDBCardBody>
</MDBCard>

</div>
       </div>
       </MDBAnimation>
       </MDBContainer>
                </div>)
            }
}