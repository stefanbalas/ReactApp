import React from "react";
import ReactTable from "react-table";

class Encounters extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    const url =
      "https://hapi.fhir.org/baseR4/Encounter?subject=" +
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
        Header: "Subject",
        accessor: "resource.subject.display",
        width: 200,
      },
      {
        Header: "Doctor",
        accessor: "resource.participant[0].individual.display",
        width: 200,
      },
      {
        Header: "Status",
        accessor: "resource.status",
        width: 200,
      },
      {
        Header: "Start date",
        accessor: "resource.period.start",
        width: 220,
      },

      {
        Header: "End date",
        accessor: "resource.period.end",
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

export default Encounters;
