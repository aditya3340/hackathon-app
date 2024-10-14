import React from "react";
import NavigationBar from "./Utilities/NavigationBar";
import ButtonComponent from "./Utilities/ButtonComponent";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

const SubmissionComponent = ({ data }) => {
  const { id, title, description, coverImage, startDate, summary } = data;

  //TODO:UI from individualSubmission
  return (
    <>
      <NavigationBar />
      <section className="max-w-[90%] m-auto px-6">
        <div className="md:flex justify-around my-12 ">
          <div className="md:min-w-[60%] ">
            <div className="flex items-center ">
              <img
                className="h-36 w-36 rounded-xl object-cover object-center"
                src={coverImage}
                alt="nature image"
              />

              <h1 className="text-gray-300 font-bold text-4xl md:mx-10 mx-4">
                {title}
              </h1>
            </div>
            <p className="text-gray-400 mt-6 mb-4">{summary}</p>
            <div className="flex">
              <ButtonComponent text={"Mark as Favourite"}>
                <FaRegStar />
              </ButtonComponent>
              <span className="mx-2"></span>
              <ButtonComponent text={startDate}>
                <CiCalendarDate />
              </ButtonComponent>
            </div>
          </div>
          <div className="flex md:flex-col md:justify-center my-2 md:my-0">
            {/* TODO:Add functionality to edit and delete submission */}

            <ButtonComponent text={"Edit"}>
              <MdOutlineEdit />
            </ButtonComponent>
            <span className="mx-2 md:my-2"></span>

            <ButtonComponent text={"Delete"}>
              <MdDeleteOutline />
            </ButtonComponent>
          </div>
        </div>
        <p className="font-light">{description}</p>
      </section>
    </>
  );
};

export default SubmissionComponent;
