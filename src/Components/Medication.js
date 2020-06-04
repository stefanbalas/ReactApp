import React from "react";
import ReactTable from "react-table";

class Medication extends React.Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        const url =
            "https://hapi.fhir.org/baseR4/Medication?_format=json&_pretty=true";
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
                Header: "No.",
                id: "row",
                maxWidth: 50,
                filterable: false,
                Cell: (row) => {
                    return <div>{row.index + 1}</div>;
                },
            },
            {
                Header: "Code",
                accessor: "resource.code.coding[0].code",
                width: 200,
            },
            {
                Header: "Name",
                accessor: "resource.code.coding[0].display",
                width: "auto",
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
                        pageSize={10}
                        style={{
                            height: "auto",
                            width: "auto",
                            textAlign: "center",
                        }}
                    />
                ) : (
                    <div>No info</div>
                )}
            </React.Fragment>
        );
    }
}

export default Medication;
