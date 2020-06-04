import React from "react";
import ReactTable from "react-table";

class AllergyIntolerance extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    const url =
      "http://hapi.fhir.org/baseR4/AllergyIntolerance?patient=" +
      this.props.id +
      "&_format=json&_pretty=true";
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data.entry });
      });
  }

  render() {
    const data = this.state.data;
    const columns = [
      {
        Header: "Nr.",
        id: "row",
        maxWidth: 50,
        filterable: false,
        Cell: (row) => {
          return <div>{row.index + 1}</div>;
        },
      },
      {
        Header: "Category",
        accessor: "resource.category[0]",
        width: 200,
      },
      {
        Header: "Status",
        accessor: "resource.clinicalStatus.coding[0].display",
        width: 100,
      },
      {
        Header: "Severity",
        accessor: "resource.criticality",
        width: 100,
      },
      {
        Header: "Manifestation",
        accessor: "resource.reaction[0].manifestation[0].coding[0].display",
        width: 220,
      },
      {
        Header: "Confirmation",
        accessor: "resource.verificationStatus.coding[0].display",
        width: 220,
      },
    ];
    return (
      <React.Fragment>
        {this.state.data ? (
          <ReactTable
            className="-striped -highlight"
            data={data}
            columns={columns}
            showPageSizeOptions={false}
            showPagination={true}
            pageSize={5}
            style={{
              height: "auto",
              width: "auto",
              textAlign: "center",
            }}
          />
        ) : (
          <div>No data found</div>
        )}
      </React.Fragment>
    );
  }
}

export default AllergyIntolerance;
