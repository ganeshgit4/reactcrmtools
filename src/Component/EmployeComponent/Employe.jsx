import axios from "axios";
import { Component } from "react";
import './Employe.css'

export default class Employe extends Component{
    constructor(){
        super()

        this.state={
            name:'emp',
            Emp_First_Name:'',
            Emp_Last_Name:'',
            Emp_Contact_No:'',
            Emp_Email:'',
            Emp_Designation:'',
            Emp_Qulification:'',
            Emp_SSC_Mark:'',
            Emp_HSC_Mark:'',
            Emp_Graduation:'',
            Emp_PG:'',
            Emp_Gender:'',
            Emp_Created_Date:'',
            Emp_Updated_Date:''
        }
    }

    registerInputValues=(event)=>{
        console.log("............")
       
    this.setState({[event.target.id]: event.target.value})
    }
    registerSubmit=()=>{
        console.log("coming........")
    
    let json={
        "Emp_First_Name":this.state.Emp_First_Name,
        " Emp_Last_Name":this.state.Emp_Last_Name,
        " Emp_Contact_No":this.state.Emp_Contact_No,
         "Emp_Email":this.state.Emp_Email,
        "Emp_Designation":this.state.class_Experience,
        "Emp_Qulification":this.state.Emp_Qulification,
        "Emp_SSC_Mark":this.state.Emp_SSC_Mark,
        "Emp_HSC_Mark":this.state.Emp_HSC_Mark,
        "Emp_Graduation":this.state.Emp_Graduation,
        "Emp_PG":this.state.Emp_PG,
        "Emp_Gender":this.state.Emp_Gender,
        "Emp_Created_Date":this.state.Emp_Created_Date,
        "Emp_Updated_Date":this.state.Emp_Updated_Date 
    }
    

    axios.post("http://localhost:8080/Emp/save",json).then(

      (res)=>{
        console.log(res)
      }
    )
}
changeStaet=()=>{

    console.log("clicking");
    this.setState({ name:'emp'})
}
    render(){
        return(
            <div className="container">
                <div className="row e">
                   
               <div className="col-4 card">
               
               </div>
               <div className="col-6  cardf">
                <form >
                <div className="card"><br />
                  <input  type="text" placeholder="first name" id= "Emp_First_Name" onChange={this.registerInputValues} /> 
                  <input type="text"  placeholder="last name" id="Emp_Last_Name" onChange={this.registerInputValues} /> 
                  <input type="tel" placeholder="contact bo" id="Emp_Contact_No" onChange={this.registerInputValues}  />
                  <input type="text" placeholder="mail id" id="Emp_Email"  onChange={this.registerInputValues}  />
                 <input type="text" name="" id="Emp_Designation" placeholder="designation" onChange={this.registerInputValues} />
                 <input type="text" name="" id="Emp_Qulification" placeholder="Qulification" onChange={this.registerInputValues} />
                 <input type="text" name="" id="Emp_SSC_Mark" placeholder="10th mark" onChange={this.registerInputValues} />
                 <input type="text" name="" id="Emp_HSC_Mark" placeholder="12th mark" onChange={this.registerInputValues} />
                 <input type="text" name="" id="Emp_Graduation" placeholder="gradution" onChange={this.registerInputValues} />
                 <input type="text" name="" id="Emp_PG" placeholder="post gradution" onChange={this.registerInputValues} />
                 <input type="text" name="" id="Emp_Gender" placeholder="gender" onChange={this.registerInputValues} />

        
                </div> <button  onClick={this.registerSubmit}>send</button>
                </form>
               
            </div>
            </div>
               </div>

        )
    }

}