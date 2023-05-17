import { Component } from "react"
import axios from "axios";
import './CourseComponent.css';
export default class Course extends Component{
    constructor(){
        super()
        this.state={
            name:'course',
            course_Name:'',
            course_Trainer_Name:'',
            course_Fee:'',
            course_Duration:'',
            course_Code:'',
        }

    }
registerInputValues=(event)=>{
        this.setState({[event.target.id]: event.target.value})
    }
    registerSubmit=()=>{
        console.log("coming ")
        let json={
            "course_Name":this.state.course_Name,
            "course_Trainer_Name":this.state.course_Trainer_Name,
            "course_Fee":this.state.course_Fee,
            "course_Duration":this.state.course_Duration,
            "course_Code":this.state.course_Code
            
        }
        axios.post("http://localhost:8080/course/post",json).then(    
    (res)=>{
   console.log(res)
    }
    ) 
    
    }
    changeStaet=()=>{
        
        console.log("clicking");
        this.setState({name:'course'})
    }
    render(){
        return(<div className="container">
            <div className="coursecard">
              <form>
              <div class="col-md-9 pe-5">
<input placeholder="Enter Course Name" type="text" id='course_Name' onChange={this.registerInputValues} required/>
           </div><br></br>
       <div class="col-md-9 pe-5">
<input placeholder="Enter Trainer Name" type="text" id='course_Trainer_Name' onChange={this.registerInputValues} required/>
      </div><br></br>
      <div class="col-md-9 pe-5">
<input placeholder="Enter Course Fee" type="number" id='course_Fee' onChange={this.registerInputValues} required/>
      </div><br></br>
      <div class="col-md-9 pe-5">
<input placeholder="Enter Course Duration " type="text" id='course_Duration' onChange={this.registerInputValues} required/>
           </div><br></br> 
           <div class="col-md-9 pe-5">
<input placeholder="Enter Course code " type="text" id='course_Code' onChange={this.registerInputValues} required/>
           </div><br></br> 
           <button className="sub-btn"  onClick={this.registerSubmit}>Submit</button>

                </form>   
            </div>
        </div>)
    }
}