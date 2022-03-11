import React from "react";

export const Validation = (formData) => {
  let errors = {};

//   identiy: "",
//   govWinId: "",
//   domain: "",
//   descr: "",
//   rfpformData: "",
//   submissionDate: "",
//   estTotalVal: "",
//   identifiedSubs: "",
//   completed: "",

  if (!formData.email) {
    errors.email = "Email is required";
  }
  if (!formData.agency) {
    errors.agency = "Agency is Required";
  }
  if (!formData.name) {
    errors.name = "Name no is required";
  }
  if (!formData.identity) {
    errors.identity = "Identity is required";
  }
  if (!formData.domain) {
    errors.domain = "Domain is required";
  }
  if (!formData.descr) {
    errors.descr = "Description is required";
  }


  return errors;
};
