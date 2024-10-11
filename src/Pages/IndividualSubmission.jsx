import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchIndividualSubmission } from "../Features/Submission/submissionSlice";
import SubmissionComponent from "../Components/SubmissionComponent";

const IndividualSubmission = () => {
  const { submissionId } = useParams();

  const dispatch = useDispatch();

  const { individualSubmission, isLoading, error } = useSelector(
    (state) => state.submission
  );

  useEffect(() => {
    dispatch(fetchIndividualSubmission(submissionId));
  }, [dispatch]);

  if (isLoading) {
    // FIXME:Add spinner
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {individualSubmission && (
        <SubmissionComponent data={individualSubmission} />
      )}
    </>
  );
};

export default IndividualSubmission;
