import feedbackList from "../data.json";
import { sortedBy } from "../utils/static";

export const productAction = {
  addNew: "ADD_NEW",
  sort: "SORT_LIST",
};

export const initialState = {
  feedbackList: feedbackList.productRequests,
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case productAction.addNew:
      return { ...state };

    case productAction.sort:
      if (action.payload === sortedBy[0].name) {
        const sortedList = state.feedbackList.sort(
          (a, b) => b.upvotes - a.upvotes
        );
        return {
          ...state,
          feedbackList: sortedList,
        };
      }

      if (action.payload === sortedBy[1].name) {
        const sortedList = state.feedbackList.sort(
          (a, b) => a.upvotes - b.upvotes
        );

        return {
          ...state,
          feedbackList: sortedList,
        };
      }

      if (action.payload === sortedBy[2].name) {
        const sortedList = state.feedbackList.sort(
          (a, b) => b?.comments?.length - a?.comments?.length
        );

        return {
          ...state,
          feedbackList: sortedList,
        };
      }

      if (action.payload === sortedBy[3].name) {
        const sortedList = state.feedbackList.sort(
          (a, b) => a?.comments?.length - b?.comments?.length
        );

        return {
          ...state,
          feedbackList: sortedList,
        };
      }

      return {
        ...state,
      };

    default:
      return { ...state };
  }
};
