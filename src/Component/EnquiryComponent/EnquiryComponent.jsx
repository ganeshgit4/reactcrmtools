import { Component } from "react";
import axios from "axios";
import './EnquiryComponent.css';
import {  MDBContainer,  MDBRow } from "mdb-react-ui-kit";
export default class Enquiry extends Component{
    constructor(){
        super()
        this.state={
            name:'enquiry',
            full_Name:'',
            mobile:'',
            email_id:'',
            qualification:'',
            course:'',
            year_of_passing:'',
            created_date:'',
            updated_date:'',
        }
    }
    registerInputValues=(event)=>{
        this.setState({[event.target.id]: event.target.value})
    }
    registerSubmit=()=>{
        console.log("coming .......")
        let json={
            "full_Name":this.state.full_Name,
            "mobile":this.state.mobile,
            "email_id":this.state.email_id,
            "qualification":this.state.qualification,
            "course":this.state.course,
            "year_of_passing":this.state.year_of_passing,
            "created_date":this.state.created_date,
            "updated_date":this.state.updated_date
        }
    axios.post("http://localhost:8080/enquiry/post",json).then(    
    (res)=>{
   console.log(res)
    }
    ) 
    }
    changeStaet=()=>{

        console.log("clicking");
        this.setState({name:'enquiry'})
    }
    render(){
        return(<div className="container" >
             <div style={{ display: 'flex',alignContent:'center' }} >
             <MDBContainer fluid className="p-3 my-5 h-custom">
             <MDBRow>
                <div className="col-6 space">
                
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image"/ >
               
           </div>
            <div className="col-6">
            <div className="carde">
                <form>
                    
               <div class="col-md-9 pe-5">
               
      Full Name         <input placeholder="Enter Full Name" type="text" id='full_Name' onChange={this.registerInputValues} required/>
</div><br></br>
<div class="col-md-9 pe-5">
<input placeholder="Enter mobile number" type="number"  id='mobile' onChange={this.registerInputValues} required/>
</div><br></br>
<div class="col-md-9 pe-5">
<input placeholder="Enter email-id" type="email" id='email_id' onChange={this.registerInputValues} required/>
</div><br></br>
<div class="col-md-9 pe-5">
<input placeholder="Enter Qualification" type="text" id='qualification' onChange={this.registerInputValues} required/>
</div><br></br>
<div class="col-md-9 pe-5">
<input placeholder="Enter Course" type="text" id='course' onChange={this.registerInputValues} required/>
</div><br></br>
    <div class="col-md-9 pe-5">
<input placeholder="Enter Year of passing" type="number" id='year_of_passing' onChange={this.registerInputValues} required/>
</div><br></br>
<div class="col-md-9 pe-5">
<input placeholder="Enter the date" type="Date" id='created_date' onChange={this.registerInputValues} required/>
</div><br></br>
<div class="col-md-9 pe-5">
<input placeholder="Enter the current date" type="Date" id='updated_date' onChange={this.registerInputValues} required/>
</div><br></br>
<button className="sub-btn"  onClick={this.registerSubmit}>Submit</button>
</form>

            </div>
            </div>
            </MDBRow>
            </MDBContainer>
               
              </div>               
        </div>)
    }
}