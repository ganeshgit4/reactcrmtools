import { Component } from "react";
import './Forgot.css'
import axios from "axios";


export default class Forgot extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'Forgot',
            emp_email:'',

        }

    }
    registerInputValues=(event)=>{
        console.log("............")
       
    this.setState({[event.target.id]: event.target.value})
    }
    registerSubmit=()=>{
        console.log("coming........")
    
        let json={
          emp_email:this.state.emp_email,
        }
        axios.post("http://localhost:8080/employe/forgot",json).then(

    (res)=>{
      if(res.status==200){
        console.log(res)
        if(res.data.length==0){
          console.log("plese enter the valid user information")       
          
        }
        else{
            
                console.log("result of user :: "+res.data[0])
                localStorage.setItem("user",JSON.stringify( res.data[0]))

        }
    }
}

        )
    }
    changeStaet=()=>{

        console.log("clicking");
        this.setState({ name:'Forgot'})
          
      }
      loginWithLocalstorge=()=> {
        localStorage.setItem("userId")
        
   console.log(localStorage.getItem("userid"));
   
     }
    
    
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
        
        <a href="/reset" className="btn w-100" >Reset Pasword</a>
        <div class="d-flex justify-content-between mt-4">
            <a className="btn" href="/lo">Login</a>
            <a className="btn" href="/reg">Register</a>
        </div>
    </div>
</div>
     
        </div>)
    }
}