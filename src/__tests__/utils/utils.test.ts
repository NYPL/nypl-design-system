import { range } from "../../utils/utils";

describe("range", () => {
  it("returns an array of values not including the stop argument", () => {
    expect(range({ start: 1, stop: 2 })).toEqual([1]);
    expect(range({ start: 4, stop: 7 })).toEqual([4, 5, 6]);
    expect(range({ start: 2, stop: 9 })).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  it("returns an array of values skipping by the step argument", () => {
    expect(range({ start: 1, stop: 10, step: 2 })).toEqual([1, 3, 5, 7, 9]);
    expect(range({ start: 4, stop: 8, step: 3 })).toEqual([4, 7]);
    expect(range({ start: 2, stop: 20, step: 2 })).toEqual([
      2, 4, 6, 8, 10, 12, 14, 16, 18,
    ]);
    expect(range({ start: 2, stop: 20, step: 4 })).toEqual([2, 6, 10, 14, 18]);
    expect(range({ start: 2, stop: 6, step: 2 })).toEqual([2, 4]);
    expect(range({ start: 2, stop: 20, step: 5 })).toEqual([2, 7, 12, 17]);
  });
});
