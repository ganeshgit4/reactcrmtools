import axios from "axios";
import { Component } from "react"
import './CourseData.css'

export default class CourseData extends Component{
    constructor(props){
        super(props);
        this.state={
            coursedata:[]
        }
        this.getcoursedata()
    }
    getcoursedata=()=>{
        console.log("coursedata");
        axios.get("http://localhost:8080/course/get").then(
            (res)=>{
                if(res.status==200 )
                this.setState(this.state.coursedata=res.data)
            }
        )
    }
    render(){
        return(<div className="container ">
            <div className="row t" >
            
                {
                    this.state.coursedata.map(
                        (test)=>
                        <div className="card b" style={{width:'20rem'}}>
                            <p>Course name::{test.course_Name}</p>
                            <p>Trainer name::{test.course_Trainer_Name}</p>
                            <p>Course fee::{test.course_Fee}</p>
                            <p>Course duration::{test.course_Duration}</p>
                            <p>Course code::{test.course_Code}</p>
                            </div>
                    )
                }

            </div>
        </div>)

    }

}