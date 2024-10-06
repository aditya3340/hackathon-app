import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  submissions: [
    {
      id: 1,
      title: "Submission 1",
      description: "This is submission 1",
      summary: "I am summary of the hackathon",
      coverImage: "https://picsum.photos/200/300",
      startDate: "2022-01-01",
      endDate: "2024-04-04",
      github_repository: "aditya3340@github.com",
      isFavorite: false,
      status: "pending",
    },
    {
      id: 2,
      title: "Submission 2",
      description: "This is submission 2",
      summary: "I am summary of the hackathon",
      coverImage: "https://picsum.photos/200/301",
      startDate: "2022-01-01",
      endDate: "2024-04-04",
      github_repository: "aditya3340@github.com",
      isFavorite: false,
      status: "pending",
    },
  ],
};

const submissionSlice = createSlice({
  name: "submissions",
  initialState,
  reducers: {
    //reducers for the submissions
    //for actions like {addSubmission, removeSubmissionById, editSubmissionById}
    addSubmission: (state, action) => {
      state.submissions.push(action.payload);
    },
    getIndividualSubmissionById: (state, action) => {
      const id = action.payload;
      const submission = state.submissions.filter(
        (submission) => submission.id === id
      );
      return submission;
    },
    removeSubmissionById: (state, action) => {},
    editSubmissionById: (state, action) => {},
  },
});

export const {
  addSubmission,
  removeSubmissionById,
  editSubmissionById,
  getIndividualSubmissionById,
} = submissionSlice.actions;

export default submissionSlice.reducer;
