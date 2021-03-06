import {
  OPEN_VIEWER,
  CLOSE_VIEWER,
  OPEN_EDITOR,
  CLOSE_EDITOR,
} from '../actions/files.js';

const defaultState = {};

const files = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_VIEWER:
      return {
        ...state,
        viewerEntry: action.entry,
        viewerObjectURL: action.objectURL,
      };
    case CLOSE_VIEWER:
      return {
        ...state,
        viewerEntry: null,
      };
    case OPEN_EDITOR:
      return {
        ...state,
        editorEntry: action.entry,
        editorFileData: action.fileData,
      };
    case CLOSE_EDITOR:
      return {
        ...state,
        editorEntry: null,
        editorFileData: null,
      };
    default:
      return {
        ...state,
      };
      return state;
  }
};

export default files;
