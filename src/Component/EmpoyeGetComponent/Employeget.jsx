import axios from "axios";
import { Component } from "react";

export default class Employeget extends  Component{
    constructor(props){
        super(props);
        this.state={
            employdata:[]
        }
        this.getemploydata()
    }
    getemploydata=()=>{
        console.log("access allow.......1...")
        axios.get("http://localhost:8080/employe/get").then(

         (res)=>{
            this.setState(this.state.employdata=res.data)
         }
        )
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                   
                    {
                        this.state.employdata.map((test)=>
                        <div className=" card cp" style={{width:'27rem',height:'25rem'}}>
                            <p>First Name::{test.Emp_First_Name}</p>
                            <p><b>Last Name::</b>{test.Emp_Last_Name}</p>
                            <p><b>Contact::</b>{test.Emp_Contact_No}</p>
                            <p><b>Email::</b>{test.Emp_Email}</p>
                            <p><b>Disgnation::</b>{test.Emp_Designation}</p>
                            <p><b>Qulifiction::</b>{test.Emp_Qulification}</p>
                            <p><b>Gender::</b>{test.Emp_Gender}</p>
                        </div>
                   ) }
                   
                </div>
            </div>
        )
    }
}