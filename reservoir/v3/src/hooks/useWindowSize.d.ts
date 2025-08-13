interface WindowSize {
    width: number;
    height: number;
}
/**
 * React hook used to get the window size on device resizing.
 * Based on https://usehooks-typescript.com/react-hook/use-window-size
 */
declare function useWindowSize(): WindowSize;
export default useWindowSize;
