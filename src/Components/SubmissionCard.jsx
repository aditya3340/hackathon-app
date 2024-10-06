import React from "react";

const SubmissionCard = ({ id, title, image, summary, link }) => {
  return (
    <div id={id} className=" p-4 my-2 ">
      <div className="flex">
        <div className="max-w-28 max-h-28  ">
          <img className="w-full h-full rounded-lg" src={image} />
        </div>
        <p className="ml-4 font-bold">{title}</p>
      </div>
      <p className="mt-2 font-light">{summary}</p>
    </div>
  );
};

export default SubmissionCard;
