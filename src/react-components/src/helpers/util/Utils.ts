/**
 * Accepts any number of arguments, and returns the first that exists
 */
export function findFirst(...args: any[]): any {
  let firstArg = args.find(arg => !!arg);
  if ( firstArg ) {
    return firstArg;
  } else {
    throw new Error("Expected any of the following to exist, but found none" + JSON.stringify(args));
  }
}

