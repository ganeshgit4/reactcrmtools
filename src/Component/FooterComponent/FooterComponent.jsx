import { Component } from "react";
import './FooterComponent.css';

export default class Footer extends Component{
    render(){
        return(<div className="container">
             <div className="row" style={{backgroundColor:"#2B2A28", color:"white"}} >
                <div className="col-6">
                    <img src="https://www.vcubesoftsolutions.com/wp-content/uploads/2021/11/LOGO.jpg" alt="logo" />
                    <h5>Learn Best Courses In Our Training Academy For your IT Career</h5>
                    <h6>V CUBE Can Assist you to Reach Your Goal with IT  Courses</h6>

                </div>
                <div className="col-3">
                <a className="href-link" href="#">About</a><br></br>
                <a className="href-link" href="#">Courses</a><br></br>
                <a className="href-link" href="#">Privacy policy</a>
                </div>
            <div className="col-3">
                <h2>Address</h2>
               <p>V CUBE Software Solutions Pvt.</p>
               <p>Ltd. second floor,above</p>
               <p>Raymond’s clothing store,KPHB</p>
               <p>Phase 1 Kukatpally, Hyderabad,</p>
               <p>Telangana 500072</p>
               <p>Contact us :</p>
               <p>+917675070124/</p>
               <p>+919059456742</p>
            </div>
             
              
            

        </div>

        </div>)
    }
}