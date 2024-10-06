import React from "react";
import SubmissionCard from "./SubmissionCard";
import { Link } from "react-router-dom";

const SubmissionDisplayComponent = ({ data }) => {
  return (
    <div className="my-2 max-w-[90%] m-auto">
      {data.map((submission) => {
        const { id, title, summary, coverImage } = submission;
        return (
          <Link to={`/submission/${id}`} key={id}>
            <SubmissionCard
              id={id}
              title={title}
              summary={summary}
              image={coverImage}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SubmissionDisplayComponent;
