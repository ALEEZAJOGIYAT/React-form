import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const ShowData = () => {
  const table_data = useSelector((state) => state.addUser);

  console.log("reducer data", table_data);

  // const rows = [Tabledata.formData];

  // console.log(Tabledata, "reducer data");

  useEffect(() => {}, [table_data]);

  //   email: "",
  //   agency: "",
  //   name: "",
  //   identiy: "",
  //   govWinId: "",
  //   domain: "",
  //   descr: "",
  //   rfpDate: "",
  //   lead: "",
  //   // submissionDate: "",
  //   estTotalVal: "",
  //   identifiedSubs: "",
  //   completed: "",

  return (
    <div>
      <h2>USER DATA</h2>
      {/* {table_data?.map(({ formData, id }, index) => {
        return (
          <div key={index}>
            <h1>{formData.name}</h1>
          </div>
        );
      })} */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Agency</TableCell>
              <TableCell align="right">Unique Identity</TableCell>
              <TableCell align="right">Gov win ID</TableCell>
              <TableCell align="right">Domain</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Lead</TableCell>
              <TableCell align="right">Rfp Date</TableCell>
              <TableCell align="right">Estimated Total Value</TableCell>
              <TableCell align="right">Identified Subs</TableCell>
              <TableCell align="right">Completion Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
