import React from "react";
import NavigationBar from "./Utilities/NavigationBar";
import ButtonComponent from "./Utilities/ButtonComponent";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

const SubmissionComponent = ({ data }) => {
  const { id, title, description, coverImage, startDate } = data;

  //TODO:UI from individualSubmission
  return (
    <>
      <NavigationBar />
      <section className="max-w-[90%] m-auto p-4">
        <div className=" md:flex justify-around my-12 ">
          <div className="min-w-[60%]">
            <div className="md:flex">
              <img
                className="h-36 w-36 rounded-xl object-cover object-center"
                src={coverImage}
                alt="nature image"
              />

              <h1 className="text-black font-bold text-4xl md:mx-10">
                {title}
              </h1>
            </div>
            <p className="text-black my-4">{description}</p>
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
      </section>
    </>
  );
};

export default SubmissionComponent;
