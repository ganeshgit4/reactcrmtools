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
                            <p><b>First Name::</b>{test.employe_First_Name}</p>
                            <p><b>Last Name::</b>{test.employe_Last_Name}</p>
                            <p><b>Contact::</b>{test.employe_MobileNO}</p>
                            <p><b>Email::</b>{test.emp_email}</p>
                            <p><b>Disgnation::</b>{test.employe_designation}</p>
                            <p><b>Qulifiction::</b>{test.employe_Qualification}</p>
                            <p><b>Gender::</b>{test.employe_Gender}</p>
                        </div>
                   ) }
                   
                </div>
            </div>
        )
    }
}