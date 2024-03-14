/**
 * Close dropdowns when clicking outside of them or by pressing
 * the escape key. It expects an action callback that will set
 * the dropdown state to false (close).
 */
declare const useCloseDropDown: (actionCb: (val: boolean) => void, ref: React.RefObject<HTMLDivElement>) => void;
export default useCloseDropDown;
