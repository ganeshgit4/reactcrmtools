import { Component } from "react";

export default class Profile extends Component{
constructor(){
    super()
this.state={
  user:JSON.parse(localStorage.getItem("user"))

}


//console.log(this.state.user.emp_first_name)
}
handleClick=()=>{
    localStorage.clear();
    window.location.reload();

} 



    render(){

        return(
            <div className="container">
   {localStorage.getItem("user") && <div>

    <h1>{this.state.user.employe_First_Name}</h1>
    </div>
    


   }
   {localStorage.getItem("user") && 
   <a href="/lo">
   <button onClick={this.handleClick}>Logout</button>
</a>
    }

            </div>
        )
    }
}
