import React, { useState } from "react";
import {
  Container,
  Paper,
  FormControl,
  Grid,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { Validation } from "./validate";
import { MdEdit, MdSend, AiFillEye } from "react-icons/md";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import "./style.scss";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import { addData } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    agency: "",
    name: "",
    identiy: "",
    govWinId: "",
    domain: "",
    descr: "",
    rfpDate: "",
    lead: "",
    // submissionDate: "",
    estTotalVal: "",
    identifiedSubs: "",
    completed: "",
  });
  // console.log(formData, "data-->");
  let leadData = [
    { value: "1", label: "Prime" },
    { value: "EUR", label: "Sub" },
  ];
  const [errors, setErrors] = useState({});
  const [date, setDate] = useState(null);
  const table_data = useSelector((state) => state.addUser || []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: new Date().getTime().toString(),
      formData,
    };

    table_data.push(obj);
    dispatch(addData(table_data, date));
    setFormData("");
    setDate("");

    // alert("submission successfully");
    // setErrors(Validation(errors));
  };

  return (
    <div
      className="app"
      style={{
        alignItems: " center",
        display: "flex",
        justifyContent: "center",
        paddingBottom: "10px",
        paddingTop: "50px",
        textAlign: "center",
        paddingBottom: "45px",
      }}
    >
      <div
        className="form"
        style={{
          borderRadius: "6px",
          boxShadow: " 0 0 20px #d3d3d3",
          padding: "20px",
          textAlign: "start",
          transition: " .5s",
          width: "40%",
          height: 1100,
        }}
      >
        <center style={{ display: "block", textAlign: "-webkit-center" }}>
          <img
            className="img_style"
            src="https://abbas_form.surge.sh/images/aretec.png"
          ></img>
        </center>
        <FormControl
          sx={{
            display: "block",
            marginTop: "1em",
            textAlign: "start",
            height: 1000,
          }}
          fullwidth
        >
          <div className="form_headings">
            <Typography
              sx={{
                margin: "0px 0px 0.35em",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontWeight: "500",
                fontSize: "1.25rem",
                lineHeight: 1.6,
                letterSpacing: "0.0075em",
              }}
            >
              AretacSBD 8(a) Stars III Registration Form
              <br />
              <span
                style={{
                  margin: "0px 0px 0.35em",
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontWeight: "400",
                  fontSize: "0.75rem",
                  lineHeight: "1.66",
                  letterSpacing: "0.03333em",
                  display: "block",
                }}
              >
                <Typography>
                  {" "}
                  <br />
                  contact: stars3@aretecinc.com
                </Typography>
              </span>
              <span
                style={{
                  margin: "0px 0px 0.35em",
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontWeight: "400",
                  fontSize: "0.75rem",
                  lineHeight: "1.66",
                  letterSpacing: "0.03333em",
                  display: "block",
                }}
              >
                <Typography>
                  contact: 0000000000 <br />
                  <br />
                </Typography>
              </span>
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                margin: "0px 0px 0.35em",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                // fontWeight: "400",
                fontSize: "1rem",
                // lineHeight: "1.66",
                // letterSpacing: "0.03333em",
                display: "block",
              }}
              variant="h6"
            >
              Aretac approval of Pricing, Staffing and participation in white
              glove review will always be required
              <br />
            </Typography>
          </div>
          <FormControl></FormControl>
          <div
            className="form_group"
            style={{ marginTop: "40px", marginBottom: "10px" }}
          >
            <TextField
              required
              id="standard-password-input"
              variant="standard"
              label="Company Email"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
          </div>
          <div
            className="form_group"
            style={{ marginTop: "12px", marginBottom: "10px" }}
          >
            <TextField
              required
              id="standard-basic"
              variant="standard"
              label="Client Agency"
              placeholder="Enter client agency"
              name="agency"
              value={formData.agency}
              onChange={handleChange}
            />
            {/* {errors.agency && <p style={{ color: "red" }}>{errors.agency}</p>} */}
          </div>
          <div
            className="form_group"
            style={{ marginTop: "12px", marginBottom: "10px" }}
          >
            <TextField
              required
              id="standard-basic"
              variant="standard"
              label="Name"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div
            className="form_group"
            style={{ marginTop: "12px", marginBottom: "10px" }}
          >
            <TextField
              required
              id="standard-basic"
              variant="standard"
              label="Unique Identity"
              placeholder="Enter Text"
              name="identity"
              value={formData.identity}
              onChange={handleChange}
            />
            {/* {errors.identity && (
              <p style={{ color: "red" }}>{errors.identity}</p>
            )} */}
          </div>
          <div
            className="form_group"
            style={{ marginTop: "12px", marginBottom: "10px" }}
          >
            <TextField
              required
              id="standard-basic"
              variant="standard"
              label="Opportunity Overview/ Description"
              placeholder="Enter Text"
              name="descr"
              value={formData.descr}
              onChange={handleChange}
            />
            {/* {errors.descr && <p style={{ color: "red" }}>{errors.descr}</p>} */}
          </div>
          <div
            className="form_group"
            style={{ marginTop: "12px", marginBottom: "10px" }}
          >
            <TextField
              required
              id="standard-basic"
              variant="standard"
              label="Anticipated Submission Date"
              placeholder="Enter Text"
              name="submissionDate"
              onChange={handleChange}
            />
          </div>

          <div
            className="two_groups"
            style={{ marginTop: "50px", marginBottom: "10px" }}
          >
            <TextField
              id="outlined-select-currency"
              select
              name="lead"
              label="Lead and Support"
              value={formData.lead}
              onChange={handleChange}
              //helperText="Please select any one"
              sx={{
                width: "100%",
              }}
            >
              {leadData.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ marginLeft: "5px" }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Rfp Date"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div>
            {/* <div>
            <TextField
              id="outlined-select-currency"
              type="date"
              name="submissionDate"
              value={formData.submissionDate}
              sx={{
                width: "100%",
              }}
              helperText="Anticipated Submission Date"
            ></TextField> */}
          </div>
          <div
            className="form_group"
            style={{ marginTop: "25px", marginBottom: "10px" }}
          >
            <TextField
              required
              id="standard-basic"
              variant="standard"
              label="Estimated Total Value"
              placeholder="Enter Text"
              name="estTotalVal"
              value={formData.estTotalVal}
              onChange={handleChange}
            />
          </div>
          <div
            className="form_group"
            style={{ marginTop: "12px", marginBottom: "10px" }}
          >
            <TextField
              required
              id="standard-basic"
              variant="standard"
              label="Identified Subs"
              placeholder="Enter Text"
              name="identifiedSubs"
              value={formData.identifiedSubs}
              onChange={handleChange}
            />
          </div>
          <div
            className="form_group"
            style={{ marginTop: "12px", marginBottom: "10px" }}
          >
            <TextField
              required
              id="standard-basic"
              variant="standard"
              label="Engagement to date(describe completed capture activities)"
              placeholder="Enter Text"
              name="completed"
              value={formData.completed}
              onChange={handleChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              //   margin: 13,
              marginTop: "25px",
              //marginBottom: "10px"
            }}
          >
            <Button
              disableRipple
              variant="contained"
              onClick={handleSubmit}
              endIcon={<MdSend />}
              sx={{ m: 3 }}
            >
              Submit{" "}
            </Button>
            <Link to="/show">
              <Button variant="contained" sx={{ mx: 5 }}>
                Show Data
              </Button>
            </Link>
          </div>
        </FormControl>
      </div>
    </div>
  );
};
export default RegistrationForm;
