import { useReducer } from "react";

type Action = {
  // The fields that we are updating or reset them all at once.
  type: "category" | "comment" | "email" | "clear";
  payload?: string;
};
interface NewsletterSignupState {
  category?: string;
  comment: string;
  email?: string;
}

const initialState: NewsletterSignupState = {
  category: "comment",
  comment: "",
  email: "",
};

/**
 * Simple reducer to manage the internal state of the form
 * fields in the NewsletterSignup component.
 */
function reducer(state: NewsletterSignupState, action: Action) {
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
 * DS internal helper reducer hook to manage internal state for the NewsletterSignup
 * component. Note: this custom hook is not tested directly as it's an
 * implementation detail of the NewsletterSignup component, following the guidance
 * of RTL: https://testing-library.com/docs/example-react-hooks-useReducer
 */
function useNewsletterSignupReducer() {
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

export default useNewsletterSignupReducer;
