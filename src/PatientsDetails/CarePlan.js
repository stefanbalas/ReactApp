import React from "react";
import ReactTable from "react-table";

class CarePlan extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    const url =
      "https://hapi.fhir.org/baseR4/CarePlan?patient=" +
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
        Header: "Date",
        accessor: "resource.created",
        width: 200,
      },
      {
        Header: "Description",
        accessor: "resource.description",
        width: 100,
      },
      {
        Header: "Medication",
        accessor: "resource.activity",
        width: "auto",
        Cell: (row) => {
          const r = row.row["resource.activity"];
          console.log(r);
          return (
            <div>
              {r.map((item) => {
                return (
                  <div key={Math.random()}>
                    {item.detail.productReference?.reference}:{" "}
                    {item.detail.dailyAmount?.value}{" "}
                    {item.detail.dailyAmount?.unit} {" |  STATUS: "}
                    {item.detail.status} {" |  DESCRIPTION: "}{" "}
                    {item.detail.description}
                  </div>
                );
              })}
            </div>
          );
        },
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

export default CarePlan;
