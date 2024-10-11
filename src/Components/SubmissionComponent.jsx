import React from "react";

const SubmissionComponent = ({ data }) => {
  const { id, title, description } = data;

//   TODO:UI from individualSubmission
  return (
    <div>
      SubmissionComponent for submission {title} with id :{id}{" "}
    </div>
  );
};

export default SubmissionComponent;
