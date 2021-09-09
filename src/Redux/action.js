import {
  addNote,
  editNote,
  deleteNote,
  archive,
  unarchive,
  clearNote,
  restore,
} from "./actionType";

export const AddNote = (note) => {
  return {
    type: addNote,
    payload: {
      id: Date.now(),
      note,
    },
  };
};

export const EdiNote = (id, note) => {
  return {
    type: editNote,
    payload: {
      id,
      note,
    },
  };
};

export const Unarchive = (id, note) => {
  return {
    type: unarchive,
    payload: {
      id,
      note,
    },
  };
};

export const Archive = (id, note) => {
  return {
    type: archive,
    payload: {
      id,
      note,
    },
  };
};
export const ClearNote = () => {
  return {
    type: clearNote,
    payload: {},
  };
};
export const DeleteNote = (id, note) => {
  return {
    type: deleteNote,
    payload: {
      id,
      note,
    },
  };
};
export const Restore = (id, note) => {
  console.log(" restore payload dispatched");
  return {
    type: restore,
    payload: {
      id,
      note,
    },
  };
};
