import React from "react";
import Encounters from "../PatientsDetails/Encounters";
import AllergyIntolerance from "../PatientsDetails/AllergyIntolerance";
import CarePlan from "../PatientsDetails/CarePlan";
import Appointment from "../PatientsDetails/Appointment";
//this.props.location.pathname.substring(9)
class Details extends React.Component {
  render() {
    const idPacient = this.props.location.pathname.substring(9);
    return (
      <React.Fragment>
        <h2>Encounters</h2>
        <Encounters id={idPacient} />
        <h2>Allergy Intolerance</h2>
        <AllergyIntolerance id={idPacient} />
        <h2>Care Plan</h2>
        <CarePlan id={idPacient} />
        <h2>Appointment</h2>
        <Appointment id={idPacient} />
      </React.Fragment>
    );
  }
}
export default Details;
