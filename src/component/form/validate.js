import React from "react";

export const Validation = (data) => {
  let errors = {};

//   identiy: "",
//   govWinId: "",
//   domain: "",
//   descr: "",
//   rfpData: "",
//   submissionDate: "",
//   estTotalVal: "",
//   identifiedSubs: "",
//   completed: "",

  if (!data.email) {
    errors.email = "Email is required";
  }
  if (!data.agency) {
    errors.agency = "Agency is Required";
  }
  if (!data.name) {
    errors.name = "Name no is required";
  }
  if (!data.identity) {
    errors.identity = "Identity is required";
  }
  if (!data.domain) {
    errors.domain = "Domain is required";
  }
  if (!data.descr) {
    errors.descr = "Description is required";
  }


  return errors;
};
