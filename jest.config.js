module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setup.ts"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/__tests__/setup.ts",
    "<rootDir>/src/__tests__/fileMock.ts",
  ],
  transformIgnorePatterns: [
    "./node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__tests__/fileMock.ts",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  preset: "ts-jest",
};
