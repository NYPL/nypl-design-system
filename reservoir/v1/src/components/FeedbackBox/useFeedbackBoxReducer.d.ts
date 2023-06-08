interface FeedbackBoxState {
    category?: string;
    comment: string;
    email?: string;
}
/**
 * DS internal helper reducer hook to manage internal state for the FeedbackBox
 * component. Note: this custom hook is not tested directly as it's an
 * implementation detail of the FeedbackBox component, following the guidance
 * of RTL: https://testing-library.com/docs/example-react-hooks-useReducer
 */
declare function useFeedbackBoxReducer(): {
    state: FeedbackBoxState;
    setCategory: (category: string) => void;
    setComment: (comment: string) => void;
    setEmail: (email: string) => void;
    clearValues: () => void;
};
export default useFeedbackBoxReducer;
