import axios from "axios";
import { Component } from "react";
import './Register.css'

export default class Register extends Component{
constructor(){
    super()

    this.state={
        name:'reg',
        reg_First_Name:'',
        reg_Last_Name:'',
        reg_Email_Id:'',
        reg_Phone_No:'',
        reg_Gender:'',
        reg_Course:'',
        reg_State:'',
        reg_Mode_Of_Training:''
       
    }
}
registerInputValues=(event)=>{
    console.log("............")
   
this.setState({[event.target.id]: event.target.value})
}
registerSubmit=()=>{
    console.log("coming.......")


    let json ={

        "reg_First_Name":this.state.reg_First_Name,
        "reg_Last_Name":this.state.reg_Last_Name,
        "reg_Email_Id":this.state.reg_Email_Id,
        "reg_Phone_No":this.state.reg_Phone_No,
        "reg_Gender":this.state.reg_Gender,
        "reg_Course":this.state.reg_Course,
        "reg_State":this.state.reg_State,
        "reg_Mode_Of_Training":this.state.reg_Mode_Of_Training

    }

         axios.post("http://localhost:8080/reg/save",json).then(
            
             (res)=>{
                       console.log(res)
                    }
         )

}
changeStaet=()=>{

    console.log("clicking");
    this.setState({ name:'reg'})
}

    render(){
        return(
            <div className="container" style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
                    <div className="cardef ">
                   <form action="">
                        <label htmlFor="">First Name</label>
                    <input type="text" placeholder="First Name" id="reg_First_Name"  onChange={this.registerInputValues} />
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder="Last Name" id="reg_Last_Name" onChange={this.registerInputValues} />
                    <label htmlFor="">Email Id</label>
                    <input type="text" placeholder="Email id" id="reg_Email_Id" onChange={this.registerInputValues} />
                    <label htmlFor="">Mobile No</label>
                    <input type="number" name="" placeholder="Mobile No" id="reg_Phone_No"  onChange={this.registerInputValues} />
                    <label htmlFor="">Gender</label>
                    <input type="text"placeholder="Gender" id="reg_Gender" onChange={this.registerInputValues} />
                    <label htmlFor="">Course</label>
                    <input type="text" placeholder="Course" id="reg_Course" onChange={this.registerInputValues} />
                    <label htmlFor="">State</label>
                    <input type="text" placeholder="State" id="reg_State" onChange={this.registerInputValues} />
                    <label htmlFor="">Training Mode</label>
                    <input type="text" placeholder="Mode Of Training" id="reg_Mode_Of_Training" onChange={this.registerInputValues} /><br />
                 <button  onClick={this.registerSubmit}>send</button>
                 </form>
                </div>
                
            </div>
        )
    }
}
