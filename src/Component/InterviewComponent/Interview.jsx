import axios from "axios";
import { Component } from "react";
import './Inteview.css'


export default class Interview extends Component{
    constructor(){
        super()
        this.state={
            name:"interview",
            interview_course:'',
            interview_company_name:'',
            interview_role:'',
            interview_experience:'',
            interview_eligibility:'',
            no_of_vacancies:'',
            interview_location:'',
            interview_type:'',
            interview_package:'',
            interview_mode:'',
            interview_deadline:'',
            interview_date:'',
            interview_updated_date:'',
        }

    }
    registerInputValues=(event)=>{
        this.setState({[event.target.id]: event.target.value})
    }
    registerSubmit=()=>{
        console.log("coming .......")
        let json={
            "interview_course":this.state.interview_course,
            "interview_company_name":this.state.interview_company_name,
            "interview_role":this.state.interview_role,
            "interview_experience":this.state.interview_experience,
            "interview_eligibility":this.state.interview_eligibility,
            "no_of_vacancies":this.state.no_of_vacancies,
            "interview_location":this.state.interview_location,
            "interview_type":this.state.interview_type,
            "interview_package":this.state.interview_package,
            "interview_mode":this.state.interview_mode,    
            "interview_deadline":this.state.interview_deadline,   
            "interview_date":this.state.interview_date,  
            "interview_updated_date":this.state.interview_updated_date,   
        }
        console.log("after json coneing......");
        axios.post("http://localhost:8080/interview/save",json).then(    
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
                
                return(<div className="container" style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                    <div className="card ie">
                        <h3 className="text-center">
                           <b>INTERVIEW</b>:
                        </h3>
                     <form>
                        <div className="form-group">
 

<label>Interview Course</label>
<input placeholder="Enter course name" type="text" className="form-control ei"  id='interview_course' onChange={this.registerInputValues} required/>
<label>Company Name</label>
<input placeholder="Enter Company name" type="text" className="form-control ei"  id='interview_company_name' onChange={this.registerInputValues} required/>
<label>Job Roles</label>
<input placeholder="Enter Job Role" type="tex" className="form-control ei" id='interview_role' onChange={this.registerInputValues} required/>
<label>Required Experience for job</label>
<input placeholder="Enter Experience" type="text" className="form-control ei" id='interview_experience' onChange={this.registerInputValues} required/>
<label>Eligibility</label>
<input placeholder="Enter job eligibility" type="text" className="form-control ei" id='interview_eligibility' onChange={this.registerInputValues} required/>


    <label>Number of vacancies</label>
<input placeholder="Enter number of vacancies" type="number" className="form-control ei" id='no_of_vacancies' onChange={this.registerInputValues} required/>
<label>Interview Location</label>


<input placeholder="Enter the location" type="text" className="form-control ei" id='interview_location' onChange={this.registerInputValues} required/>

<label>Type of job</label>
<input placeholder="Enter the job type" type="text" className="form-control ei" id='interview_type' onChange={this.registerInputValues} required/>

<label>Package</label>
<input placeholder="Enter the package" type="text" className="form-control ei" id='interview_package' onChange={this.registerInputValues} required/>
<label>Mode of interview</label>


<input placeholder="Enter the mode of interview" type="text" className="form-control ei" id='interview_mode' onChange={this.registerInputValues} required/>


<label>Deadline to apply</label>

<input placeholder="Enter deadline date & time" type="text" className="form-control ei" id='interview_deadline' onChange={this.registerInputValues} required/>


<label>Date of interview</label>


<input placeholder="Enter the interview date" type="date" className="form-control ei" id='interview_date' onChange={this.registerInputValues} required/>

<label>updated date</label>

<input placeholder="Enter the updated date" type="date" className="form-control ei" id='interview_updated_date' onChange={this.registerInputValues} required/>
</div>
</form>
<button className="sub-btn"  onClick={this.registerSubmit}>Submit</button>

</div>

                </div>)
            }
}