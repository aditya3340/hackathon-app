import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIndividualSubmissionById } from "../Features/Submission/submissionSlice";

const IndividualSubmission = () => {
  const params = useParams();

  const individualSubmission = useSelector((state) => state.submission.submissions.find((submission) => submission.id === params.submissionId))

  console.log(individualSubmission)


  return <div>IndividualSubmission for object {params.submissionId}</div>;
};

export default IndividualSubmission;
