import {
  bindRedux
} from "redux-form-utils";

const {
  state: formState,
  reducer: formReducer
} = bindRedux({
  form: "addModal",
  fields: ["title", "date", "description"]
});

const initialState = {
  visible: false,
  ...formState
};

export function showModal() {
  return {
    type: "SHOW_MODAL"
  };
}

export function hideModal() {
  return {
    type: "HIDE_MODAL"
  };
}

export function addArticle() {
  return (dispatch, getState) => {
    const {
      title,
      date,
      description
    } = getState().list.modalInfo.form;
    return dispatch({
      type: "ADD_ARTICLE",
      url: "/api/article.json",
      method: "POST",
      params: {
        title: title.value,
        date: date.value,
        description: description.value
      }
    });
  };
}

export default function addModalReducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        ...state,
        visible: true
      };
    case "HIDE_MODAL":
      return {
        ...state,
        visible: false
      };
    case "ADD_ARTICLE":
      return {
        ...state,
        visible: false
      };
    default:
      return formReducer(state, action);
  }
}