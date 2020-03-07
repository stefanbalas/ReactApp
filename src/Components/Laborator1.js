import React, {Component} from "react";
import  {l1_data_url} from "../Helpers/Helpers"
import axios from 'axios';
import EnhancedTable from "./Table"

export default class Laborator1 extends Component{
    constructor (props) {
        super(props);
        this.state = {
            patients_data: []
        }
    }

    componentDidMount() {
       axios.get(l1_data_url)
           .then( res =>{
               this.setState({patients_data: res.data});
           })
    }

    render() {
        return(
            <div>
                <EnhancedTable rows={this.state.patients_data}/>
                <br/>
                <div className={"info"}>Data fetched from: {l1_data_url}</div>
            </div>
        )
    }
}