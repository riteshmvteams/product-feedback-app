import feedbackList from "../data.json";
import { sortedBy } from "../utils/static";

export const productAction = {
  addNew: "ADD_NEW",
  sort: "SORT_LIST",
  toggleUpvote: "TOGGLE_UPVOTE",
  filterCategory: "FILTER_CATEGORY",
  addComment: "ADD_COMMENT",
  addReply: "ADD_REPLY",
  deleteFeedback: "DELETE_FEEDBACK",
};

export const initialState = {
  feedbackList: localStorage.getItem("feedbackList")
    ? JSON.parse(localStorage.getItem("feedbackList"))
    : feedbackList.productRequests,
  filteredList: localStorage.getItem("feedbackList")
    ? JSON.parse(localStorage.getItem("feedbackList"))
    : feedbackList.productRequests,
  currentUser: feedbackList?.currentUser,
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
          filteredList: sortedList,
        };
      }

      if (action.payload === sortedBy[1].name) {
        const sortedList = state.feedbackList.sort(
          (a, b) => a.upvotes - b.upvotes
        );

        return {
          ...state,
          filteredList: sortedList,
        };
      }

      if (action.payload === sortedBy[2].name) {
        const sortedList = state.feedbackList.sort(
          (a, b) => b?.comments?.length - a?.comments?.length
        );

        return {
          ...state,
          filteredList: sortedList,
        };
      }

      if (action.payload === sortedBy[3].name) {
        const sortedList = state.feedbackList.sort(
          (a, b) => a?.comments?.length - b?.comments?.length
        );

        return {
          ...state,
          filteredList: sortedList,
        };
      }

      return {
        ...state,
      };

    case productAction.toggleUpvote:
      const updatedList = state.filteredList.map((list) => {
        if (list.id === action.payload) {
          return {
            ...list,
            upvoted: list.upvoted ? false : true,
            upvotes: list.upvoted ? list.upvotes - 1 : list.upvotes + 1,
          };
        } else {
          return list;
        }
      });

      const updatedList2 = state.feedbackList.map((list) => {
        if (list.id === action.payload) {
          return {
            ...list,
            upvoted: list.upvoted ? false : true,
            upvotes: list.upvoted ? list.upvotes - 1 : list.upvotes + 1,
          };
        } else {
          return list;
        }
      });

      localStorage.setItem("feedbackList", JSON.stringify(updatedList2));

      return {
        ...state,
        filteredList: updatedList,
        feedbackList: updatedList2,
      };

    case productAction.filterCategory:
      const filteredList = state.feedbackList.filter((list) => {
        return list.category.toLowerCase() === action.payload.toLowerCase();
      });

      if (action.payload.toLowerCase() === "all") {
        return {
          ...state,
          filteredList: state.feedbackList,
        };
      }

      return { ...state, filteredList: filteredList };

    case productAction.addComment:
      const updated = state.feedbackList.map((feedback) => {
        if (feedback.id === action.payload.id) {
          return {
            ...feedback,
            comments: [...feedback.comments, action.payload.comment],
          };
        } else {
          return feedback;
        }
      });

      localStorage.setItem("feedbackList", JSON.stringify(updated));

      return { ...state, filteredList: updated, feedbackList: updated };

    case productAction.addReply:
      const updateResult = state.feedbackList.map((feedback) => {
        if (feedback.id === action.payload.id) {
          return {
            ...feedback,
            comments: feedback.comments?.map((comment) => {
              if (comment.id === action.payload.commentId) {
                if (comment.replies) {
                  return {
                    ...comment,
                    replies: [...comment.replies, action.payload.reply],
                  };
                } else {
                  return {
                    ...comment,
                    replies: [action.payload.reply],
                  };
                }
              } else {
                return comment;
              }
            }),
          };
        } else {
          return feedback;
        }
      });

      localStorage.setItem("feedbackList", JSON.stringify(updateResult));

      return {
        ...state,
        filteredList: updateResult,
        feedbackList: updateResult,
      };

    case productAction.deleteFeedback:
      const listAfterDelete = state?.feedbackList?.filter(
        (feedback) => feedback.id !== +action.payload
      );

      localStorage.setItem("feedbackList", JSON.stringify(listAfterDelete));

      return {
        ...state,
        filteredList: listAfterDelete,
        feedbackList: listAfterDelete,
      };

    default:
      return { ...state };
  }
};
