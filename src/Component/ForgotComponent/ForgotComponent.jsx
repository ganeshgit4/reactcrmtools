import { Component } from "react";
import './Forgot.css'

export default class Forgot extends Component{
    render(){
        return(
        <div className="d-flex justify-content-center">
           <div className="card text-center" style={{width: 400}}>
    <div className="card-header h5 text-white "style={{backgroundColor:"#2B2A28"}}>Password Reset</div>
    <div className="card-body px-5">
        <p className="card-text py-2">
            Enter your email address and we'll send you an email with instructions to reset your password.
        </p>
        <div className="form-outline">
        <label className="form-label" for="typeEmail">Email input</label>
            <input type="email" id="emp_email" class="form-control my-3" />
           
        </div>
        <div className="form-outline">
        <label className="form-label" for="typenumber">Mobile Number input</label>
            <input type="number" id="Emp_Contact_No" class="form-control my-3" />
           
        </div>
        <a href="#" className="btn w-100" >Reset password</a>
        <div class="d-flex justify-content-between mt-4">
            <a className="btn" href="/lo">Login</a>
            <a className="btn" href="/reg">Register</a>
        </div>
    </div>
</div>
     
        </div>)
    }
}