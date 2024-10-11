import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// TODO:thunk function for api call
export const fetchSubmissions = createAsyncThunk(
  "/api/submissions",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:5000/api/submissions");
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch submissions");
    }
  }
);

const initialState = {
  submissions: [],
  loading: false,
  error: null
};

const submissionSlice = createSlice({
  name: "submissions",
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder
    .addCase(fetchSubmissions.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchSubmissions.fulfilled, (state, action) => {
      state.loading = false;
      state.submissions = action.payload;
    })
    .addCase(fetchSubmissions.rejected, (state, action) => {
      state.loading = false;
      state.error =  action.payload || "failed to fetch submissions";
    })
  }
});

export const {
  addSubmission,
  removeSubmissionById,
  editSubmissionById,
  getIndividualSubmissionById,
} = submissionSlice.actions;

export default submissionSlice.reducer;
