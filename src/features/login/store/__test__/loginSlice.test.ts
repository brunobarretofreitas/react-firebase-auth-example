import { AnyAction } from "@reduxjs/toolkit";
import reducer from "../loginSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, {} as AnyAction)).toEqual({
    loginState: {
      pending: false,
      error: false,
      success: false,
    },
  });
});
