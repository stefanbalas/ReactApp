import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ReactTable from "react-table";

class Patients extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("http://hapi.fhir.org/baseR4/Patient?_format=json&_pretty=true")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data.entry });
      });
  }
  render() {
    const data = this.state.data;
    const columns = [
      {
        Header: "No.",
        id: "row",
        maxWidth: 50,
        filterable: false,
        Cell: (row) => {
          return <div>{row.index + 1}</div>;
        },
      },
      {
        Header: "First name",
        accessor: "resource.name[0].given[0]",
        width: 150,
      },
      {
        Header: "Last name",
        filterable: true,
        accessor: "resource.name[0].family",
        width: 150,
      },
      {
        Header: "Gender",
        accessor: "resource.gender",
        width: 70,
      },
      {
        Header: "Birth date",
        accessor: "resource.birthDate",
        width: 110,
      },
      {
        Header: "Details",
        accessor: "resource.id",
        width: 150,
        Cell: (row) => {
          const idP = row.row["resource.id"];
          return (
            <Link to={"/Details/" + idP}>
              <Button size="sm">Click</Button>
            </Link>
          );
        },
      },
    ];
    return (
      <React.Fragment>
        <ReactTable
            className="-striped -highlight"
            data={data}
            columns={columns}
            showPageSizeOptions={false}
            showPagination={true}
            pageSize={10}
            style={{
              height: "auto",
              width: "auto",
              textAlign: "center",
            }}
        />
      </React.Fragment>
    );
  }
}
export default Patients;
