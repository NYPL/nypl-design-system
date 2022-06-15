// The URL endpoint to fetch patron data.
const patronApiUrl = "https://platform.nypl.org/api/v0.1/auth/patron/tokens/";
const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3Lm55cGwub3JnIiwic3ViIjoiNjM2NzAyOCIsImF1ZCI6ImFwcF9sb2dpbiIsImlhdCI6MTQ4MjE3NjQ3MCwiZXhwIjoxNDgyMTgwMDcwLCJhdXRoX3RpbWUiOjE0ODIxNzY0NzAsInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIGNvb2tpZSBwYXRyb246cmVhZCJ9.JO7VbOqCC7HyjRmeyHD4zM1Gl0JBk5RdxjAkCp0h6sfVe-xs5FyY7biYqs19k4dUY2DbFYR5IG3xYt9IdhqyMkSnJxtiCY36WN7X_e0eBF2T1_IWKGaBc4JlbroMj5_aNB5W4nQvclrdlb2mV38Q_HGAMUKe8DDeCmAHctEtqGppNl8DC7IvqkekRS_6zgQwsHHW5kJR-f7zUROi4fvFpdNR-I7J4VNWdFIOijb4vXFOOWRLzdY_GHLJdWvSgxhqzwkceA5BScCicAKeHYHo04vabNp5TvPXoR0ypULqTyGYsNnXnUmh2Mu46j3bcNTACEKS97FBx1IfwttBL1ARtQ";
export const patronApiUrlWithToken = `${patronApiUrl}${accessToken}`;

// The URL endpoint to refresh the access token.
const authServerDomain = "https://login.nypl.org/auth";
export const tokenRefreshLink = `${authServerDomain}/refresh`;

// The following three variables are mock responses
// from the platform.nypl.org API.
export const mockResponseData = {
  data: {
    decodedToken: {
      iss: "https://www.nypl.org",
      sub: "6367028",
      aud: "app_login",
      iat: 1482176470,
      exp: 1482180070,
      // eslint-disable-next-line camelcase
      auth_time: 1482176470,
      scope: "openid offline_access cookie patron:read",
    },
    patron: {
      id: "6367028",
      updatedDate: "2016-12-13T19:49:57+00:00",
      createdDate: "2015-09-03T14:16:20+00:00",
      deletedDate: null,
      deleted: false,
      suppressed: false,
      names: ["PATRON, JANE"],
      barCodes: ["23333097542730"],
      expirationDate: "2018-09-03",
      homeLibraryCode: "ma",
      birthDate: "1972-05-13",
      emails: ["janepatron@nypl.org"],
    },
  },
  count: 1,
  statusCode: 200,
  debugInfo: [],
};

export const mockErrorResponseData = {
  expired: false,
  statusCode: 400,
  type: "exception",
  message: "No response",
  error: {
    type: "NYPL\\Starter\\APIException",
    code: 0,
    message: "No response",
    file: "/var/task/src/Controller/AuthController.php",
    line: 47,
    trace: [
      "#0 /var/task/src/Controller/AuthController.php(122): NYPL\\Services\\Controller\\AuthController->getTokenResponse('eyJ0eXAiOiJKV1Q...')",
      "#1 /var/task/index.php(260): NYPL\\Services\\Controller\\AuthController->getToken('eyJ0eXAiOiJKV1Q...')",
      "#2 [internal function]: Closure->{closure}(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response), Array)",
      "#3 /var/task/vendor/slim/slim/Slim/Handlers/Strategies/RequestResponse.php(41): call_user_func(Object(Closure), Object(Slim\\Http\\Request), Object(Slim\\Http\\Response), Array)",
      "#4 /var/task/vendor/slim/slim/Slim/Route.php(325): Slim\\Handlers\\Strategies\\RequestResponse->__invoke(Object(Closure), Object(Slim\\Http\\Request), Object(Slim\\Http\\Response), Array)",
      "#5 /var/task/vendor/slim/slim/Slim/MiddlewareAwareTrait.php(116): Slim\\Route->__invoke(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response))",
      "#6 /var/task/vendor/slim/slim/Slim/Route.php(297): Slim\\Route->callMiddlewareStack(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response))",
      "#7 /var/task/vendor/slim/slim/Slim/App.php(443): Slim\\Route->run(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response))",
      "#8 /var/task/vendor/nypl/microservice-starter/src/Service.php(63): Slim\\App->__invoke(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response))",
      "#9 [internal function]: NYPL\\Starter\\Service->NYPL\\Starter\\{closure}(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response), Object(NYPL\\Starter\\Service))",
      "#10 /var/task/vendor/slim/slim/Slim/DeferredCallable.php(43): call_user_func_array(Object(Closure), Array)",
      "#11 [internal function]: Slim\\DeferredCallable->__invoke(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response), Object(NYPL\\Starter\\Service))",
      "#12 /var/task/vendor/slim/slim/Slim/MiddlewareAwareTrait.php(67): call_user_func(Object(Slim\\DeferredCallable), Object(Slim\\Http\\Request), Object(Slim\\Http\\Response), Object(NYPL\\Starter\\Service))",
      "#13 /var/task/vendor/slim/slim/Slim/MiddlewareAwareTrait.php(116): Slim\\App->Slim\\{closure}(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response))",
      "#14 /var/task/vendor/slim/slim/Slim/App.php(337): Slim\\App->callMiddlewareStack(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response))",
      "#15 /var/task/vendor/slim/slim/Slim/App.php(298): Slim\\App->process(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response))",
      "#16 /var/task/index.php(333): Slim\\App->run()",
      "#17 {main}",
    ],
  },
  debugInfo: [],
};

export const mockExpiredResponseData = {
  data: {
    expired: true,
    statusCode: 401,
    type: "exception",
    message: "Expired token",
  },
  error: {
    type: "NYPL\\Starter\\APIException",
    code: 0,
    message: "Expired token",
    file: "/var/task/src/Controller/AuthController.php",
    line: 47,
    trace: [
      "#0 /var/task/src/Controller/AuthController.php(122): NYPL\\Services\\Controller\\AuthController->getTokenResponse('eyJ0eXAiOiJKV1Q...')",
      "#1 /var/task/index.php(260): NYPL\\Services\\Controller\\AuthController->getToken('eyJ0eXAiOiJKV1Q...')",
      "#2 [internal function]: Closure->{closure}(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response), Array)",
      "#3 /var/task/vendor/slim/slim/Slim/Handlers/Strategies/RequestResponse.php(41): call_user_func(Object(Closure), Object(Slim\\Http\\Request), Object(Slim\\Http\\Response), Array)",
      "#4 /var/task/vendor/slim/slim/Slim/Route.php(325): Slim\\Handlers\\Strategies\\RequestResponse->__invoke(Object(Closure), Object(Slim\\Http\\Request), Object(Slim\\Http\\Response), Array)",
      "#5 /var/task/vendor/slim/slim/Slim/MiddlewareAwareTrait.php(116): Slim\\Route->__invoke(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response))",
      "#6 /var/task/vendor/slim/slim/Slim/Route.php(297): Slim\\Route->callMiddlewareStack(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response))",
      "#7 /var/task/vendor/slim/slim/Slim/App.php(443): Slim\\Route->run(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response))",
      "#8 /var/task/vendor/nypl/microservice-starter/src/Service.php(63): Slim\\App->__invoke(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response))",
      "#9 [internal function]: NYPL\\Starter\\Service->NYPL\\Starter\\{closure}(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response), Object(NYPL\\Starter\\Service))",
      "#10 /var/task/vendor/slim/slim/Slim/DeferredCallable.php(43): call_user_func_array(Object(Closure), Array)",
      "#11 [internal function]: Slim\\DeferredCallable->__invoke(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response), Object(NYPL\\Starter\\Service))",
      "#12 /var/task/vendor/slim/slim/Slim/MiddlewareAwareTrait.php(67): call_user_func(Object(Slim\\DeferredCallable), Object(Slim\\Http\\Request), Object(Slim\\Http\\Response), Object(NYPL\\Starter\\Service))",
      "#13 /var/task/vendor/slim/slim/Slim/MiddlewareAwareTrait.php(116): Slim\\App->Slim\\{closure}(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response))",
      "#14 /var/task/vendor/slim/slim/Slim/App.php(337): Slim\\App->callMiddlewareStack(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response))",
      "#15 /var/task/vendor/slim/slim/Slim/App.php(298): Slim\\App->process(Object(Slim\\Http\\Request), Object(Slim\\Http\\Response))",
      "#16 /var/task/index.php(333): Slim\\App->run()",
      "#17 {main}",
    ],
  },
  debugInfo: [],
};

export const mockLoginCookie =
  '{"access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3Lm55cGwub3JnIiwic3ViIjoiNjM2NzAyOCIsImF1ZCI6ImFwcF9sb2dpbiIsImlhdCI6MTQ4MjE3NjQ3MCwiZXhwIjoxNDgyMTgwMDcwLCJhdXRoX3RpbWUiOjE0ODIxNzY0NzAsInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIGNvb2tpZSBwYXRyb246cmVhZCJ9.JO7VbOqCC7HyjRmeyHD4zM1Gl0JBk5RdxjAkCp0h6sfVe-xs5FyY7biYqs19k4dUY2DbFYR5IG3xYt9IdhqyMkSnJxtiCY36WN7X_e0eBF2T1_IWKGaBc4JlbroMj5_aNB5W4nQvclrdlb2mV38Q_HGAMUKe8DDeCmAHctEtqGppNl8DC7IvqkekRS_6zgQwsHHW5kJR-f7zUROi4fvFpdNR-I7J4VNWdFIOijb4vXFOOWRLzdY_GHLJdWvSgxhqzwkceA5BScCicAKeHYHo04vabNp5TvPXoR0ypULqTyGYsNnXnUmh2Mu46j3bcNTACEKS97FBx1IfwttBL1ARtQ","expires_in":3600,"token_type":"Bearer","scope":"openid+offline_access+cookie+patron:read","refresh_token":"02b49603a8a2719389a6c77416b110675067827d"}';
