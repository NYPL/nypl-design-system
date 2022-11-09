import { useReducer } from "react";

type Action = {
  // The fields that we are updating or reset them all at once.
  type: "category" | "comment" | "email" | "clear";
  payload?: string;
};
interface FeedbackBoxState {
  category?: string;
  comment: string;
  email?: string;
}

const initialState: FeedbackBoxState = {
  category: "comment",
  comment: "",
  email: "",
};

/**
 * Simple reducer to manage the internal state of the form
 * fields in the FeedbackBox component.
 */
function reducer(state: FeedbackBoxState, action: Action) {
  switch (action.type) {
    case "category":
      return {
        ...state,
        category: action.payload,
      };
    case "comment":
      return {
        ...state,
        comment: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "clear":
    default:
      return initialState;
  }
}

/**
 * DS internal helper reducer hook to manage internal state for
 * the FeedbackBox component.
 */
function useFeedbackBoxReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setCategory = (category: string) =>
    dispatch({ type: "category", payload: category });
  const setComment = (comment: string) =>
    dispatch({ type: "comment", payload: comment });
  const setEmail = (email: string) =>
    dispatch({ type: "email", payload: email });
  const clearValues = () => dispatch({ type: "clear" });

  return { state, setCategory, setComment, setEmail, clearValues };
}

export default useFeedbackBoxReducer;
