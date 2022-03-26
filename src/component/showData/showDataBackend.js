import React, { useState, useEffect } from "react";
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
import EditForm from './editForm'
import { deleteUser } from "../../redux/actions/actions";
import Axios from "axios";

export const ShowDataBackened = (props) => {
  const [userData, setUserData] = useState([]);


  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleDelete = (key) => {
    console.log(key, "id");
    Axios.delete(`http://localhost:5000/delete/${key}`)
    .then((response) => {
    });
  };

  const handleEdit = (id) => {
      Axios.get(`http://localhost:5000/read/${id}`).then((response)=>{
        // console.log(response.data[0] ,"check")
        const data=response.data[0];
        navigate('/editform')
        console.log(data,'sir drd')
        navigate('/editform', {data})
        
      })
  };

  useEffect(() => {
    Axios.get("http://localhost:5000/read").then((response) => {
      setUserData(response.data);
     
    });
  }, [userData]);

  return (
      <div>
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
               {/* <TableCell align="right">Unique Identity</TableCell>
               <TableCell align="right">Anticipated Submission Date</TableCell> */}
               <TableCell align="right">Description</TableCell>
               <TableCell align="right">Lead</TableCell>
               <TableCell align="right">Rfp Date</TableCell>
               <TableCell align="right">Estimated Total Value</TableCell>
               <TableCell align="right">Identified Subs</TableCell>
               <TableCell align="right">Completion Date</TableCell>
               <TableCell align="right"></TableCell>
             </TableRow>
           </TableHead>
 
           <TableBody>
             {userData?.map((formData, key, id) => (
               <TableRow
                 // key={index}
                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
               >
                 <TableCell component="th" scope="row">
                   {" "}
                   {formData.name}
                 </TableCell>
                 <TableCell align="right">{formData.email}</TableCell>
                 <TableCell align="right">{formData.agency}</TableCell>
                 {/* <TableCell align="right">{formData.identity}</TableCell>
                 <TableCell align="right">{formData.subDate}</TableCell> */}
                 <TableCell align="right">{formData.descr}</TableCell>
                 <TableCell align="right">{formData.lead}</TableCell>
                 <TableCell align="right">{formData.date}</TableCell>
                 <TableCell align="right">{formData.estTotalVal}</TableCell>
                 <TableCell align="right">{formData.identifiedSubs}</TableCell>
                 <TableCell align="right">{formData.completed}</TableCell>
                 <TableCell align="right">
                   <Button onClick={() => handleDelete(formData._id)}>
                     <MdDelete />
                   </Button>
                   <Button onClick={() => handleEdit(formData._id)}>
                     <MdEdit />
                   </Button>
                 </TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer>
       {/* <div>
         {userData?.data?.map((data, index) => {
           return (
             <div key={index}>
               <h6>{data.name}</h6>
             </div>
           );
         })}
       </div> */}
        </div>


 
      </div>
 
  );
};
