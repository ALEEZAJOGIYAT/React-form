import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MdEdit, MdSend, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../redux/actions/actions";

export const ShowData = () => {
  let table = useSelector((state) => state.addUser);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  console.log("reducer", table);

  const handleBack = () => {
    navigate("/");
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    console.log("job?.data", table);
  }, [table]);

  return (
    <div>
      <div>
        <h2>USER DATA</h2>
        <Button
          sx={{ marginLeft: -155, marginTop: -10 }}
          onClick={handleBack}
          variant="contained"
        >
          <ArrowBack />
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, padding: 12 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Agency</TableCell>
              <TableCell align="right">Unique Identity</TableCell>
              <TableCell align="right">Anticipated Submission Date</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Lead</TableCell>
              <TableCell align="right">Rfp Date</TableCell>
              <TableCell align="right">Estimated Total Value</TableCell>
              <TableCell align="right">Identified Subs</TableCell>
              <TableCell align="right">Completion Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table?.data?.map(({ formData, id, date }, index) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {" "}
                  {formData.name}
                </TableCell>
                <TableCell align="right">{formData.email}</TableCell>
                <TableCell align="right">{formData.agency}</TableCell>
                <TableCell align="right">{formData.identity}</TableCell>
                <TableCell align="right">{formData.subDate}</TableCell>
                <TableCell align="right">{formData.descr}</TableCell>
                <TableCell align="right">{formData.lead}</TableCell>
                <TableCell align="right">{date}</TableCell>
                <TableCell align="right">{formData.estTotalVal}</TableCell>
                <TableCell align="right">{formData.identifiedSubs}</TableCell>
                <TableCell align="right">{formData.submissionDate}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleDelete(id)}>
                    <MdDelete />
                  </Button>
                  <Button
                  //onClick={()=>handleEdit(id,index)}
                  >
                    <MdEdit />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
