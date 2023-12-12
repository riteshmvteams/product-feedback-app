import feedbackList from "../data.json";

const productAction = {
  addNew: "ADD_NEW",
};

export const initialState = {
  feedbackList: feedbackList.productRequests,
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case productAction.addNew:
      return { ...state };
    default:
      return { ...state };
  }
};
