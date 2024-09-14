import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createSession,
  deleteSession,
  getSession,
  updateSession,
} from "../../api/session";
import { getProjectBySession } from "../../api/project";
import dayjs from "dayjs";

const initialState = {
  sessionData: [],
  loading: false,
  error: "",
  project: [],
  loadingProject: false,
  filter: {
    branch: [],
    status: [],
  },
  searchInput: "",
};

export const fetchSessionData = createAsyncThunk(
  "session/fetchSessionData",
  async () => {
    const response = await getSession();
    return response;
  }
);

export const fetchCreateSession = createAsyncThunk(
  "session/fetchCreateSession",
  async (sessionData) => {
    const response = await createSession(sessionData);
    return response;
  }
);
export const fetchUpdateSession = createAsyncThunk(
  "session/fetchUpdateSession",
  async ({ sessionData, id }) => {
    await updateSession(sessionData, id);
    return {
      sessionData,
      id,
    };
  }
);

export const fetchDeleteSession = createAsyncThunk(
  "session/fetchDeleteSession",
  async (id) => {
    await deleteSession(id);
    return id;
  }
);

export const fetchDataProjectSession = createAsyncThunk(
  "session/fetchDataProjectSession",
  async (sessionId) => {
    const response = await getProjectBySession(sessionId);
    return response;
  }
);
const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSessionData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchSessionData.fulfilled, (state, action) => {
        state.loading = false;
        state.sessionData = action.payload;
      })
      .addCase(fetchSessionData.rejected, (state, action) => {
        state.loading = false;
        state.sessionData = [];
      });
    builder
      .addCase(fetchCreateSession.pending, (state, action) => {
        state.error = "";
      })
      .addCase(fetchCreateSession.fulfilled, (state, action) => {
        state.sessionData.push(action.payload);
      })
      .addCase(fetchCreateSession.rejected, (state, action) => {
        state.error = action.payload;
      });
    builder.addCase(fetchDeleteSession.fulfilled, (state, action) => {
      state.sessionData = state.sessionData.filter(
        (item) => item.id !== action.payload
      );
    });
    builder.addCase(fetchUpdateSession.fulfilled, (state, action) => {
      const findSession = state.sessionData.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findSession !== -1) {
        state.sessionData[findSession] = {
          ...state.sessionData[findSession],
          session: action.payload.sessionData.session,
          courseYear: action.payload.sessionData.courseYear,
          // Ensure limitTime is stored as a string (ISO format)
          limitTime: dayjs(action.payload.sessionData.limitTime).toISOString(),
        };
      } else {
        console.error(`Session with id ${action.payload.id} not found`);
      }
    });
    builder
      .addCase(fetchDataProjectSession.fulfilled, (state, action) => {
        state.loadingProject = false;
        state.project = action.payload;
      })
      .addCase(fetchDataProjectSession.pending, (state, action) => {
        state.loadingProject = true;
        state.project = action.payload;
      });
  },
});

export default sessionSlice.reducer;
