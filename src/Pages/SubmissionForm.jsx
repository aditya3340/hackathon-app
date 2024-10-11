import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "../Components/FormField";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../Components/Utilities/NavigationBar";
import { useDispatch } from "react-redux";
import { addSubmission } from "../Features/Submission/submissionSlice";
import { v4 as uuidv4 } from "uuid";

const SubmissionForm = () => {
  const dispatch = useDispatch();
  const uniqueId = uuidv4();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [imagePreview, setImagePreview] = useState(null);
  const [fileError, setFileError] = useState("");

  //to handle the description length controller UI 3000/3000
  const [descriptionContentLength, setDescriptionContentLength] = useState(0);

  const handleContentLength = (e) => {
    const description = e.target.value;
    const descriptionLength = description.length;
    setDescriptionContentLength(descriptionLength);
  };

  const file = watch("coverImage");

  const handleImagePreview = (file) => {
    if (file && file.length > 0) {
      const selectedFile = file[0];

      //compress function

      //check if the file size is less than 10kb ?
      const maxSizeInBytes = 2 * 1024 * 1024;

      if (selectedFile.size < maxSizeInBytes) {
        setFileError("");

        const reader = new FileReader();

        reader.onloadend = () => {
          const imageURL = reader.result;
          setImagePreview(imageURL);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setFileError("File size should be less than 2MB");
        setImagePreview(null);
      }
    }
  };

  React.useEffect(() => {
    if (file) {
      handleImagePreview(file);
    }
  }, [file]);

  const onSubmit = async (data) => {
    if (fileError || !imagePreview) {
      alert("Please select a valid image (less than 2 MB) before submitting");
      return;
    }

    const formData = {
      ...data,
      id: uniqueId,
      isFavorite: false,
      coverImage: imagePreview, // File object included in the form data
    };

    try {
      const response = await fetch("http://localhost:5000/api/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (e) {
      console.error(e);
    }

    console.log("Form Data Submitted:", JSON.stringify(formData));
    // API call to submit the form data
    dispatch(addSubmission(formData));

    navigate("/");

    // You can now send `formData` to your server or API
  };

  return (
    <div>
      <NavigationBar />

      <div className="p-4 max-w-[85%] m-auto">
        <h1 className="text-3xl font-semibold">New Hackathon Submission</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            id="title"
            type="text"
            placeholder="title"
            label="Title"
            register={register}
            validation={{ required: "Title required" }}
            error={errors.title && "This field is required"}
          />

          <FormField
            id="summary"
            type="text"
            placeholder="A short Summary of your submission"
            label="Summary"
            register={register}
            validation={{ required: "Title required" }}
            error={errors.title && "This field is required"}
          />

          <FormField
            id="description"
            type="text"
            placeholder="description"
            label="description"
            register={register}
            validation={{ required: "Description required" }}
            error={errors.description && "This field is required"}
            onChangeHandler={(e) => handleContentLength(e)}
          />
          <span className={`flex justify-end text-sm `}>
            {descriptionContentLength}/3000
          </span>

          <FormField
            id="coverImage"
            label="Upload Cover Image:"
            type="file"
            accept="image/*"
            register={register}
            validation={{ required: "Image is required" }}
            error={errors.coverImage && errors.coverImage.message}
          />

          {fileError && (
            <p className="text-red-500">File should be less than 2 MB</p>
          )}

          {imagePreview && (
            <div>
              <h3>Image Preview:</h3>
              <img
                src={imagePreview}
                alt="Preview"
                style={{ width: "300px", height: "auto" }}
              />
            </div>
          )}

          <FormField
            id="title"
            type="text"
            placeholder="Hackathon name"
            label="Hackathon name"
            register={register}
            validation={{ required: "Title required" }}
            error={errors.title && "This field is required"}
          />

          <div className="flex justify-between">
            <FormField
              id="startDate"
              type="date"
              placeholder="startDate"
              label="Hackathon start date"
              register={register}
              validation={{ required: "start date is required" }}
              error={errors.title && "This field is required"}
            />

            <FormField
              id="endDate"
              type="date"
              placeholder="endDate"
              label="Hackathon end date"
              register={register}
              validation={{ required: "start date is required" }}
              error={errors.title && "This field is required"}
            />
          </div>

          <FormField
            id="github_repository"
            type="text"
            placeholder="Enter your submission's github repository link"
            label="Github Repository"
            register={register}
            validation={{ required: "github-repository required" }}
            error={errors.title && "This field is required"}
          />

          <button
            type="submit"
            className="bg-green-600 font-semibold rounded-lg p-2 px-4 m-2"
          >
            Upload Submission
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmissionForm;
