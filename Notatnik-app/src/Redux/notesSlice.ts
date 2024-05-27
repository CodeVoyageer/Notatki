import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
  id: number;
  text: string;
}

const notesSlice = createSlice({
  name: "notes",
  initialState: [] as Note[],
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      return state.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const index = state.findIndex((note) => note.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
