export declare const catalogLogOutURL =
  "https:/login.nypl.org/auth/logout?redirect_uri=";
export declare const patLoggedInCookieExpiredTime = 1800000;
declare function EncoreCatalogLogOutTimer(
  currentTime?: number,
  isTestMode?: boolean
): void;
export default EncoreCatalogLogOutTimer;
