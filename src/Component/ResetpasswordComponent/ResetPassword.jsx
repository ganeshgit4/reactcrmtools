import { Component } from "react";

export default class ResetPassword extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'reset',
            emp_pass:'',
        }
    }
    registerInputValues=(event)=>{
        this.setState({[event.target.id]: event.target.value})
    }
    render(){
        return(<div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card" style={{width: 500}}>
                        <div className="card-header text-center fs-4">Reset Password</div>
                        <div className="=card-body">
                            <form>
                                <div className="mb-3">
                                    <label> Enter New Password</label>
                                    <input type="text" id="emp_pass" className="form-control my-3"></input>
                                </div>
                                <div className="mb-3">
                                    <label>Conform Pasword</label>
                                    <input type="text" id="emp_pass" className="form-control my-3"></input>
                                </div>
                                <button className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}