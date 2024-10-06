import React, { useCallback, useState } from "react";

import hero_logo from "../assets/hero.png";
import { Link } from "react-router-dom";
import SplitScreen from "../Components/SplitScreen";
import NavigationBar from "../Components/NavigationBar";
import { useSelector } from "react-redux";
import SubmissionDisplayComponent from "../Components/SubmissionDisplayComponent";

const LeftComponent = ({ title }) => {
  return (
    <div className={`flex flex-col justify-center p-2 px-6 mt-5 md:mx-10`}>
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="my-10 text-md font-light md:max-w-[80%]">
        Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in
        parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget
        suspendisse ac pharetra amet. Vel nisl tempus nec vitae.
      </p>
      <Link to={"/addSubmission"}>
        <button className="bg-white text-black text-sm px-4 py-2 font-semibold rounded hover:bg-gray-300">
          Upload Submission
        </button>
      </Link>
    </div>
  );
};

const RightComponent = ({ img }) => {
  return (
    <div className="hidden md:block flex items-center justify-center  p-2 px-6 mt-5 md:mx-10 ">
      <img className=" w-[80%] h-auto" src={img} alt="hero_logo" />
    </div>
  );
};

const Home = () => {
  const [submissionToggler, setSubmissionToggler] = useState(true);

  console.log(submissionToggler);

  const data = useSelector((state) => state.submission.submissions);

  // console.log(data);

  const toggleHandler = useCallback(
    (state) => {
      setSubmissionToggler(state);
    },
    [submissionToggler]
  );

  return (
    <>
      <NavigationBar />
      <SplitScreen leftWidth={1} rightWidth={2} responsiveWidth={1}>
        <LeftComponent title="Hackathon Submission" />
        <RightComponent img={hero_logo} />
      </SplitScreen>

      <div className="flex max-w-[80%] m-auto mt-6">
        <button
          className={`p-2 text-gray-500 font-semibold text-sm border-b-2 ${submissionToggler ? "border-white" : "border-slate-900"}`}
          onClick={() => toggleHandler(true)}
        >
          All Submissions
        </button>
        <button
          className={`p-2 text-gray-500 font-semibold text-sm border-b-2 ${submissionToggler ? "border-slate-900" : "border-white"}`}
          onClick={() => toggleHandler(false)}
        >
          Favourite Submissions
        </button>
      </div>

      <SubmissionDisplayComponent data={data} />
    </>
  );
};

export default Home;
