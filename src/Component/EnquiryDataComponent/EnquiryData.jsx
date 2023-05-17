import axios from "axios";
import { Component } from "react";

export default class EnquiryData extends Component{
    constructor(props){
        super(props);
        this.state={
            enquirydata:[]
        }
        this.getenquirydata()
    }
    getenquirydata= ()=>{
        console.log("calling enquiry data");
        axios.get("http://localhost:8080/enquiry/get").then(
   


        (res) =>{
 this.setState(this.state.enquirydata=res.data)

        }

        ) 
    }
    render(){
        return(<div className="container">
                 <div className="card">
                <table>
                    <thead>
                        <tr>
                            <th>S.No </th>
                            <th>Full Name</th>
                            <th>Phone.no</th>
                            <th>Email-id</th>
                            <th>Qualification</th>
                            <th>Course</th>
                            <th>Year of passing</th>
                            <th>Created Date</th>
                            <th>Updated Date</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                   {((this.state.enquirydata.map((enquiry)=>
                   <tr>
                    <td>{enquiry.enquiry_id}</td>
                    <td>{enquiry.full_Name}</td>
                    <td>{enquiry.mobile}</td>
                    <td>{enquiry.email_id}</td>
                    <td>{enquiry.qualification}</td>
                    <td>{enquiry.course}</td>
                    <td>{enquiry.year_of_passing}</td>
                    <td>{enquiry.created_date}</td>
                    <td>{enquiry.updated_date}</td>
                    

                   </tr>
                   
                   )))

                   }
    
                    </tbody>
                </table>
                </div>
            

        </div>)
    }
}