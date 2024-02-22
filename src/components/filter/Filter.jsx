import FilterListIcon from "@mui/icons-material/FilterList";
import { Button, TextField } from "@mui/material";
import DownloadCsv from "../csv/DownloadCsv";

const Filter = (props) => {
  const {
    setFirstName,
    firstName,
    setLastName,
    applyFilterOption,
    handleClearFilter,
    lastName,
    selectedRows,
  } = props;

  return (
    <div className="px-12 py-6 ">
      <div className="bg-[#fff] ">
        <div className="flex gap-x-2 p-4 border-b-2 border-[#e0e0e09c]-600">
          <FilterListIcon />
          <h1 className="text-[18px]">Filters</h1>
        </div>
        <div className="flex gap-x-4 p-4 items-center">
          <TextField
            sx={{
              "& label.Mui-focused": {
                color: "#8d41a2",
              },
              "& label.Mui-root": {
                color: "#8d41a2",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#8d41a2",
                },
              },
            }}
            value={firstName}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            sx={{
              "& label.Mui-focused": {
                color: "#8d41a2",
              },
              "& label.Mui-root": {
                color: "#8d41a2",
              },
              color: "#8d41a2",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#8d41a2",
                },
              },
            }}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              width: "150px",
              height: "45px",
              background: "#8d41a2",
              "&:hover": {
                backgroundColor: "#8d41a2",
              },
            }}
            onClick={() => applyFilterOption()}
          >
            Apply
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "150px",
              height: "45px",
              background: "#8d41a2",
              "&:hover": {
                backgroundColor: "#8d41a2",
              },
            }}
            onClick={() => handleClearFilter()}
          >
            Clear Filter
          </Button>
          <DownloadCsv selectedRows={selectedRows} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
