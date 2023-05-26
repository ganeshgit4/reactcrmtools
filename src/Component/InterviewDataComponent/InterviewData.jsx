import axios from "axios";
import { Component } from "react";
import { json } from "react-router";

export default class InterviewData extends Component{
    constructor(props){
        super(props);
        this.state={
            interviewdata:[]
        }
        this.getinterviewdata()
    }
    getinterviewdata=()=>{
        console.log("calling interview,..");
        axios.get("http://localhost:8080/interview/get").then(
            (res)=>{
                this.setState(this.state.interviewdata=res.data)
            }
        )
    }
    render(){
        return(<div className="container">
            <div className="row">
                {
                this.state.interviewdata.map(
                    (job)=>
                    <div className="card">
                        <p><b>Course required::</b>&nbsp;&nbsp;&nbsp;&nbsp;{job.interview_course}</p>
                        <p><b>Company name::</b>{job.interview_company_name}</p>
                        <p><b>Job Role::</b>{job.interview_role}</p>
                        <p><b>Experience::</b>{job.interview_experience}</p>
                        <p><b>Eligibility::</b>{job.interview_eligibility}</p>
                        <p><b>No.of Vacancies::</b>{job.no_of_vacancies}</p>
                        <p><b>Location::</b>{job.interview_location}</p>
                        <p><b>Job type::</b>{job.interview_type}</p>
                        <p><b>Package::</b>{job.interview_package}</p>
                        <p><b>Mode of interview::</b>{job.interview_mode}</p>
                        <p><b>Deadline for apply::</b>{job.interview_deadline}</p>
                        <p><b>Interview Date::</b>{job.interview_date}</p>
                       
                        </div>
                )
    }
            </div>
        </div>)
    }
}