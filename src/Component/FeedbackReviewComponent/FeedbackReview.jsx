import axios from "axios";
import { Component } from "react";
import'./FeedbackReview.css'  
export default class FeedbackReview extends Component{
    constructor(props){
        super(props);
        this.state={
        feedbackreview:[]
    }
    this.getfeedbackreview()
    }
    getfeedbackreview=()=>{
        console.log("calling feedback.............");
        axios.get("http://localhost:8080/Feedback/get").then(

        (res)=>{
            this.setState(this.state.feedbackreview=res.data)
        }
        )
    }

    render(){
        return(
            <div className="container">

                               <div className="row">
                    {
                        this.state.feedbackreview.map(
                            (test) =>
                            <div className="card cp" style={{width:'20rem'}}>
                         <p> Name :: {test.full_Name} </p>
                         <p> Course Name::{test.course_name}</p>
                         <p> Faculty::{test.faculty} </p>
                         <p> Experience after class::{test.class_Experience}</p>
                                              
                         </div>              
                     
                     )}
               </div>
            </div>
        )
    }
}