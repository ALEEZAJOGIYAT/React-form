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
import { MdEdit, MdSend } from "react-icons/md";

import "./style.scss";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    agency: "",
    name: "",
    identiy: "",
    govWinId: "",
    domain: "",
    descr: "",
    rfpData: "",
    submissionDate: "",
    estTotalVal: "",
    identifiedSubs: "",
    completed: "",
  });
  let leadSuppItem = [
    { value: "1", label: "Prime" },
    { value: "EUR", label: "Sub" },
  ];
  const [leadSupp, setLeadSupp] = useState("EUR");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeLead = (e) => {
    setLeadSupp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.PreventDefault();
    setErrors(Validation(errors));
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
          height: 1200,
        }}
      >
        <FormControl
          sx={{
            display: "block",
            marginTop: "1em",
            textAlign: "start",
            height: 900,
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
          <div
            className="form_group"
            style={{ marginTop: "40px", marginBottom: "10px" }}
          >
            <TextField
              required
              id="standard-basic"
              variant="standard"
              label="Company Email"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
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
              name="identity"
              value={formData.descr}
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
              label="Anticipated Submission Date"
              placeholder="Enter Text"
              name="date"
              value={formData.submissionDate}
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
              label="Lead and Support"
              value={leadSupp}
              onChange={handleChangeLead}
              //helperText="Please select any one"
              sx={{
                width: "100%",
              }}
            >
              {leadSuppItem.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              type="date"
              sx={{
                width: "100%",
                marginLeft: 3,
              }}
              helperText="Anticipated RFP Date"
            ></TextField>
          </div>
          <div>
            <TextField
              id="outlined-select-currency"
              type="date"
              sx={{
                width: "100%",
              }}
              helperText="Anticipated Submission Date"
            ></TextField>
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
              name="estimate"
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
              name="subs"
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
            className="form_group"
            disableRipple
            style={{ marginTop: "55px", marginBottom: "10px" }}
            onClick={handleSubmit}
            endIcon={<MdSend />}

          >
            <Button variant="contained">Submit </Button>
          </div>
        </FormControl>
      </div>
    </div>
  );
};
export default RegistrationForm;
