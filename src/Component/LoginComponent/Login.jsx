import { Component } from "react";
import'./Login.css'
export default class Login extends Component{

    render(){
        return(
            <div className="container " style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
                <div className="card ">
         
         <form>
      <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">Email address</label>
             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
             <input type="password" class="form-control" id="exampleInputPassword1" placeholder="password"/>
  </div>
  <div class="mb-3 form-check">
           <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
           <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
         <button type="submit" >Submit</button>

</form>
<div class="d-flex justify-content-between mt-4" >
<a className="btn button" style={{backgroundColor:"GrayText"}}  href="/reg">
    <b>Register now</b>
  </a>
  <a className="btn button" style={{backgroundColor:"GrayText"}}  s    href="/forgot">
    Forgot Password
  </a>
  </div>
        
                </div>
            </div>
        )
    }
}