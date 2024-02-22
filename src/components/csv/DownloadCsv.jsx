import { CSVLink } from "react-csv";

const DownloadCsv = (props) => {
  const { selectedRows } = props;

  const selectedData = selectedRows.map((row) => ({
    id: row.id,
    firstName: row.firstName,
    age: row.age,
    lastName: row.lastName,
    role: row.role,
  }));

  const csvData = [
    ["ID", "First Name", "Last Name", "Age", "Role"],
    ...selectedData.map((row) => [
      row.id,
      row.firstName,
      row.lastName,
      row.age,
      row.role,
    ]),
  ];

  return (
    <CSVLink
      data={csvData}
      filename="Data.csv"
      className="btn btn-primary"
      style={{
        backgroundColor: "#259565",
        color: "white",
        padding: "10px 20px",
        textDecoration: "none",
        borderRadius: "5px",
      }}
    >
      Export Selected to CSV
    </CSVLink>
  );
};

export default DownloadCsv;
