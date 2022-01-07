import { getStorybookEnumValues, range } from "../../utils/utils";
import { ButtonTypes } from "../../components/Button/ButtonTypes";

describe("range", () => {
  it("returns an array of values not including the stop argument", () => {
    expect(range(1, 2)).toEqual([1]);
    expect(range(4, 7)).toEqual([4, 5, 6]);
    expect(range(2, 9)).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  it("returns an array of values skipping by the step argument", () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
    expect(range(4, 8, 3)).toEqual([4, 7]);
    expect(range(2, 20, 2)).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
    expect(range(2, 20, 4)).toEqual([2, 6, 10, 14, 18]);
    expect(range(2, 6, 2)).toEqual([2, 4]);
    expect(range(2, 20, 5)).toEqual([2, 7, 12, 17]);
  });
});

describe("getStorybookEnumValues", () => {
  const enumValues = getStorybookEnumValues(ButtonTypes, "ButtonTypes");

  it("returns an array of values from the enum passed", () => {
    expect(enumValues.options).toEqual([
      "ButtonTypes.Primary",
      "ButtonTypes.Secondary",
      "ButtonTypes.Callout",
      "ButtonTypes.Pill",
      "ButtonTypes.Link",
      "ButtonTypes.SearchBar",
      "ButtonTypes.NoBrand",
    ]);
  });

  it("returns a function with the value of the argument passed", () => {
    expect(enumValues.getValue("ButtonTypes.Primary")).toEqual("primary");
    expect(enumValues.getValue("ButtonTypes.Callout")).toEqual("callout");
    expect(enumValues.getValue("ButtonTypes.NoBrand")).toEqual("noBrand");
  });
});
