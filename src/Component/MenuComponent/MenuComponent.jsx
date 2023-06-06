import { Component } from "react";
import './MenuComponent.css'


export default class Menu extends Component{
   
  render(){
    return(<div className="conainer-fluid" >
        <div className="container" >
        <nav className="navbar navbar-expand-lg i">
          
  <b className="navbar-brand f" >V Cube Crm</b>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav " style={{gap:"10px"}}>
  <li className="nav-item active">
    <a className="nav-link e" href="/cd">Courses</a>
  </li>
  <li className="nav-item">
    <a className="nav-link e" href="/enquirydata">Enquiry</a>
  </li>
  <li className="nav-item">
    <a className="nav-link e" href="/feedback">Feedback</a>
  </li>
  <li className="nav-item">
    <a className="nav-link e" href="/batches">Batches</a>
  </li>
  <li className="nav-item">
    <a className="nav-link e" href="/rew">Reviews</a>

  <li className="nav-item">
    <a className="nav-link e" href="/empg">Employe</a>
  </li>
  <li className="nav-item">
    <a className="nav-link e" href="/inter">Interview</a>
  </li>
  </li>
 {!localStorage.getItem("user") &&
  <li className="nav-item">
  
    <a className="nav-link e" href="/lo">Login</a>
  </li>}
  {localStorage.getItem("user") &&   <li className="nav-item">
    <a className="nav-link e" href="/Profile">Profile</a>
  </li>
  
  }
</ul>

  </div>
</nav>
</div>
    </div>)
}
}