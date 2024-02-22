import { useState } from "react";
import Datagrid from "../components/datagrid/Datagrid";
import Filter from "../components/filter/Filter";

const rows = [
  {
    id: 1,
    lastName: "Anbu",
    firstName: "Surya",
    age: 22,
    role: "Software Developer",
  },
  {
    id: 2,
    lastName: "Raj",
    firstName: "Kamal",
    age: 31,
    role: "Mern Stack Developer",
  },
  {
    id: 3,
    lastName: "Kumar",
    firstName: "Arun",
    age: 31,
    role: "Backend Developer",
  },
  {
    id: 4,
    lastName: "Prasanth",
    firstName: "Ram",
    age: 11,
    role: "Database Engineer",
  },
  {
    id: 5,
    lastName: "Ramesh",
    firstName: "Aravind",
    age: 18,
    role: "UI/UX Designer",
  },
  {
    id: 6,
    lastName: "Rajarajan",
    firstName: "Deva",
    age: 21,
    role: "React Native Developer",
  },
  {
    id: 7,
    lastName: "Kumar",
    firstName: "Aswin",
    age: 44,
    role: "Data Scientist",
  },
  {
    id: 8,
    lastName: "Raj",
    firstName: "Vignesh",
    age: 36,
    role: "Prompt Engineer",
  },
  {
    id: 9,
    lastName: "xavier",
    firstName: "pascal",
    age: 45,
    role: "Project Manager",
  },
];

const TableSkeleton = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rowData, setRowData] = useState(rows);
  const [selectedData, setSelectedData] = useState([]);

  const applyFilterOption = () => {
    const filteredRows = rows.filter(
      (row) =>
        row.firstName?.toLowerCase().includes(firstName.toLowerCase()) &&
        row.lastName?.toLowerCase().includes(lastName.toLowerCase())
    );
    setRowData(filteredRows);
  };

  const handleClearFilter = () => {
    setRowData("");
    setRowData(rows);
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="bg-[#e0e0e09c] h-[100vh]">
      <Filter
        firstName={firstName}
        lastName={lastName}
        setFirstName={setFirstName}
        setLastName={setLastName}
        applyFilterOption={applyFilterOption}
        handleClearFilter={handleClearFilter}
        selectedRows={selectedData}
      />
      <Datagrid
        rows={rowData}
        setSelectedData={setSelectedData}
        selectedData={selectedData}
      />
    </div>
  );
};

export default TableSkeleton;
