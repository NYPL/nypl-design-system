/**
 * NYPL Note:
 * This file is directly taken from Chakra:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/media-query/tests/matchmedia-mock-plus.ts
 *
 * We need this to test the `useNYPLBreakpoints` hook and, unfortunately,
 * this function is not exported by Chakra.
 */
/**
 * This mock is a combination of jest-matchmedia-mock
 * https://github.com/dyakovk/jest-matchmedia-mock and
 * mq-polyfill https://github.com/bigslycat/mq-polyfill.
 *
 * A solution which allowed resizing and a more realistic implementation of
 * matchMedia was the reason for its creation. Neither project provided a good
 * solution. Combining their strong points does. The class will listen for a
 * resize event which is provided by a resizeTo function defined in the test:
 *
 *  window.resizeTo = function resizeTo(width, height) {
 *    Object.assign(this, {
 *      innerWidth: width,
 *      innerHeight: height,
 *      outerWidth: width,
 *      outerHeight: height,
 *    }).dispatchEvent(new this.Event('resize'))
 *  }
 *
 * Listeners are only called if there has been a change in the match
 * status for their media query.
 */
type MediaQueryListener = (this: MediaQueryList) => void;
interface MediaQueryList {
    readonly matches: boolean;
    readonly media: string;
    onchange: MediaQueryListener | null;
    addListener(listener: MediaQueryListener): void;
    removeListener(listener: MediaQueryListener): void;
    addEventListener(type: "change", listener: MediaQueryListener): void;
    removeEventListener(type: "change", listener: MediaQueryListener): void;
    dispatchEvent(event: Event): boolean;
}
export default class MatchMedia {
    private mediaQueries;
    private prevMatchMap;
    private mediaQueryList;
    constructor();
    private compileQuery;
    private evalQuery;
    /**
     *
     * Adds a listener function for the window resize event
     * @private
     */
    private handleResize;
    private addListener;
    private removeListener;
    /**
     * Returns an array listing the media queries for which the matchMedia has registered listeners
     * @public
     */
    getMediaQueries(): string[];
    /**
     * Returns a copy of the array of listeners for the specified media query
     * @public
     */
    getListeners(mediaQuery: string): MediaQueryListener[];
    /**
     * Clears all registered media queries and their listeners
     * @public
     */
    clear(): void;
    /**
     * Clears all registered media queries and their listeners,
     * and destroys the implementation of `window.matchMedia`
     * @public
     */
    destroy(): void;
}
export {};
