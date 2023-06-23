
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";

import { Component } from "react";

export default class BatchesGetComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            batchesData:[]
        }
        this.getbatchesdata()
    }
    getbatchesdata=()=>{
        console.log("coming");
        axios.get("http://localhost:8080/Batches/get").then(
            (res)=>{
                console.log("res");
                this.setState(this.state.batchesData=res.data)
             
            }
        )
    }
    render(){
        return(<div className="container">
        <TableContainer component={Paper}>
            <Table sx={{minWidth:650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right"><b>Batch Id</b></TableCell>
                        <TableCell align="right"><b>Batch Name</b></TableCell>
                        <TableCell align="right">Trainer</TableCell>
                        <TableCell align="right">Course</TableCell>
                        <TableCell align="right">Batch TIme</TableCell>
                        <TableCell align="right">Batch strength</TableCell>
                        <TableCell align="right">Batch councller</TableCell>
                        <TableCell align="right">Batch started date</TableCell>
                        <TableCell align="right">Batch ended date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
            
                    {
                        ((this.state.batchesData.map((batches)=>
                            <TableRow>
                                <TableCell align="right">{batches.batch_id}</TableCell>
                                <TableCell align="right">{batches.batch_Name}</TableCell>
                                <TableCell align="right">{batches.batch_Trainer_Name}</TableCell>
                                <TableCell align="right">{batches.batch_Core}</TableCell>
                                <TableCell align="right">{batches.batch_Time}</TableCell>
                                <TableCell align="right">{batches.batch_Strength}</TableCell>
                                <TableCell align="right">{batches.batch_Created_Person}</TableCell>
                                <TableCell align="right">{batches.batch_created_Date}</TableCell>
                                <TableCell align="right">{batches.batch_End_Date}</TableCell>
                            </TableRow>
                        )))
                    }
                </TableBody>
            </Table>
        </TableContainer>
           
        </div>)
    }
    
}