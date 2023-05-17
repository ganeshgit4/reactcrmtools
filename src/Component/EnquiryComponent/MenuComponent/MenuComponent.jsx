import { Component } from "react";
import './MenuComponent.css'

export default class Menu extends Component{
    render(){
        return(<div className="conainer-fluid" style={{backgroundColor:"#2B2A28"}}>
            <div class="container" >
             <nav className="navbar navbar-expand-lg" >
                    
  
  <div className="collapse navbar-collapse" id="navbarNav" >
    <ul className="navbar-nav" >
      <li className="nav-item active">
        <a className="nav-link" href="/courses">Courses</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/enquiry">Enquiry</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/feedback">Feedback</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Batches">Batches</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="reviews">Reviews</a>
      </li>
    </ul>
  </div>
</nav>
</div>
        </div>)
    }
}