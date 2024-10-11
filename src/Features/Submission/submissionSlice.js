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

// TODO:thunk function for individual data retrival
export const fetchIndividualSubmission = createAsyncThunk(
  "/submissions/fetchIndividual",
  async (submissionId, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/submissions/${submissionId}`
      );
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch submission");
    }
  }
);

const initialState = {
  submissions: [],
  individualSubmission: null,
  loading: false,
  error: null,
};

const submissionSlice = createSlice({
  name: "submissions",
  initialState,
  reducers: {
    addSubmission: (state, action) => {
      state.submissions.push(action.payload);
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
        state.error = action.payload || "failed to fetch submissions";
      });

    //handle individual Submission
    builder
      .addCase(fetchIndividualSubmission.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIndividualSubmission.fulfilled, (state, action) => {
        state.loading = false;
        state.individualSubmission = action.payload;
      })
      .addCase(fetchIndividualSubmission.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "failed to fetch individual submission";
      });
  },
});

export const {
  addSubmission,
  removeSubmissionById,
  editSubmissionById,
  getIndividualSubmissionById,
} = submissionSlice.actions;

export default submissionSlice.reducer;
