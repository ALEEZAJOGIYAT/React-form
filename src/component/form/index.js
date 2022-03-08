import React, { useState } from "react";
import { Container, Grid, Box, Typography, TextField } from "@mui/material";

export const RegistrationForm = () => {
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
    identSubjs: "",
    completed: "",
  });
  //   const [email, setEmail] = useState("");

  //   const handleChange = (e) => {
  //     setEmail(e.target.value);
  //   };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Container
        sx={{
          alignItems: " center",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "10px",
          paddingTop: "50px",
          textAlign: "center",
        }}
      >
        <div>
          <Grid>
            <Box
              component="form"
              sx={{
                my: 2,
                mx: 2,
                borderRadius: "6px",
                boxShadow: "0 0 20px #d3d3d3",
                // display: "flex",
                // flexDirection: "column",
                //   border: " 2px solid rgb(6, 6, 7)",
                width: 550,
                height: 900,
                marginTop: "10px",
                backgroundColor: "white",
                boxShadow: "0 0.2rem 3rem rgba(124, 100, 100, 0.2)",
              }}
              autoComplete="off"
            >
              <div
                style={{
                  color: "rgb(2, 7, 19)",
                  marginTop: "10px",
                  marginLeft: "-120px",
                  transition: " .5s",
                }}
              >
                <Typography
                  variant="h6"
                  //   sx={{
                  //     color: "rgb(2, 7, 19)",
                  //     marginTop: "10px",
                  //     marginLeft: "-120px",
                  //   }}
                >
                  AretacSBD 8(a) Stars III Registration Form
                  <br />
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "35px",
                  textAlign: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                }}
              >
                <Typography variant="p">Contact:alizajogy</Typography>
                <Typography
                  sx={{ marginTop: "5px", marginLeft: "-100px" }}
                  variant="p"
                >
                  <br />
                  Conatct Number:021-3661789
                </Typography>
                <div
                  style={{
                    marginTop: "80px",
                    marginLeft: "-120px",
                  }}
                >
                  <Typography>
                    <br />
                    <br />
                    Aretac approval of Pricing, Staffing and participation in
                    white glove review will always be required
                  </Typography>
                </div>
              </div>
              <div>
                <TextField
                  required
                  id="standard-basic"
                  variant="standard"
                  label="Company Email"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{
                    // marginLeft: "-00px",
                    marginTop: "40px",
                    width: "500px",
                  }}
                />
                <TextField
                  required
                  id="standard-basic"
                  variant="standard"
                  label="Client Agency"
                  placeholder="Enter client agency"
                  name="agency"
                  value={formData.agency}
                  onChange={handleChange}
                  sx={{
                    // marginLeft: "-00px",
                    marginTop: "40px",
                    width: "500px",
                  }}
                />
                <TextField
                  required
                  id="standard-basic"
                  variant="standard"
                  label="Name"
                  placeholder="Enter Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{
                    // marginLeft: "-00px",
                    marginTop: "40px",
                    width: "500px",
                  }}
                />
                <TextField
                  required
                  id="standard-basic"
                  variant="standard"
                  label="Unique Identity"
                  placeholder="Enter Text"
                  name="identity"
                  value={formData.identity}
                  onChange={handleChange}
                  sx={{
                    // marginLeft: "-00px",
                    marginTop: "40px",
                    width: "500px",
                  }}
                />

                <TextField
                  required
                  id="standard-basic"
                  variant="standard"
                  label="Opportunity Overview/ Description"
                  placeholder="Enter Text"
                  name="identity"
                  value={formData.descr}
                  onChange={handleChange}
                  sx={{
                    // marginLeft: "-00px",
                    marginTop: "40px",
                    width: "500px",
                  }}
                />
                <TextField
                  required
                  id="standard-basic"
                  variant="standard"
                  label="Anticipated Submission Date"
                  placeholder="Enter Text"
                  name="date"
                  value={formData.submissionDate}
                  onChange={handleChange}
                  sx={{
                    // marginLeft: "-00px",
                    marginTop: "40px",
                    width: "500px",
                  }}
                />
              </div>
            </Box>
          </Grid>
        </div>
      </Container>
    </>
  );
};
