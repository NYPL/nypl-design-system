import { useReducer } from "react";

type Action = {
  // The fields that we are updating or reset them all at once.
  type: "category" | "comment" | "email" | "clear";
  payload?: string;
};
interface FeedbackBoxState {
  category: string;
  comment: string;
  email?: string;
}

const initialState: FeedbackBoxState = {
  category: "comment",
  comment: "",
  email: "",
};

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
  return { state, dispatch };
}

export default useFeedbackBoxReducer;
