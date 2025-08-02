import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
  },
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action) => {
      state.projects = state.projects.filter(project => project.id !== action.payload);
    },
    updateProject: (state, action) => {
      const index = state.projects.findIndex(project => project.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = action.payload;
      }
    },
  },
});

export const { addProject, removeProject, updateProject } = projectSlice.actions;

export default projectSlice.reducer;