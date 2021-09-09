import {
  addNote,
  editNote,
  deleteNote,
  archive,
  clearNote,
  unarchive,
  restore,
} from "./actionType";

const initialState = {
  notes: [],
  archive: [],
  delete: [],
};
export default function noteReducer(state = initialState, action) {
  switch (action.type) {
    case addNote:
      return { ...state, notes: [...state.notes, action.payload] };
    case editNote:
      return {
        ...state,
        notes: [
          ...state.notes.filter((item) =>
            item.id === action.payload.id
              ? { [item.note.bgColor]: action.payload.note }
              : item
          ),
        ],
      };
    case archive:
      return {
        ...state,
        notes: [...state.notes.filter((item) => item.id !== action.payload.id)],
        archive: [...state.archive, action.payload],
      };
    case unarchive:
      return {
        ...state,
        archive: [
          ...state.archive.filter((item) => item.id !== action.payload.id),
        ],
        notes: [...state.notes, action.payload],
      };
    case clearNote:
      return { ...state, clear: action.payload };
    case deleteNote:
      return {
        ...state,
        notes: [...state.notes.filter((item) => item.id !== action.payload.id)],
        delete: [...state.delete, action.payload],
      };
    case restore:
      console.log("restore reducer", [action.payload]);
      return {
        ...state,
        delete: [
          ...state.delete.filter((item) => item.id !== action.payload.id),
        ],
        notes: [...state.notes, action.payload],
      };
    default:
      return state;
  }
}