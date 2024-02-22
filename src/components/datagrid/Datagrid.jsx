import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#8d41a2",
          },
          cell: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        },
      },
    },
  },
});

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 200,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 200,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 200,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "role",
    headerName: "Role",
    width: 400,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
];

const Datagrid = (props) => {
  const { rows, setSelectedData, selectedData } = props;
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  return (
    <div className="px-12 ">
      <Box sx={{ height: 400, width: "100%", background: "#fff" }}>
        <ThemeProvider theme={theme}>
          <DataGrid
            page={page}
            onPageChange={handlePageChange}
            checkboxSelection
            selectionModel={selectedData}
            pageSize={5}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            onRowSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRows = rows.filter((row) =>
                selectedIDs.has(row.id)
              );
              setSelectedData(selectedRows);
            }}
          />
        </ThemeProvider>
      </Box>
    </div>
  );
};
export default Datagrid;
