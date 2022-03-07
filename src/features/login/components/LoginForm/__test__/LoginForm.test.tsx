import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import LoginForm from "..";
import { act } from "react-dom/test-utils";
import { ReduxProvider } from "../../../../../store/app/providers";
import { store } from "../../../../../store/app/store";

test("it should disable the submit button by default", () => {
  render(
    <ReduxProvider store={store}>
      <LoginForm />
    </ReduxProvider>
  );
  expect(screen.getByRole("button")).toBeDisabled();
});

test("it should not enable the submit button when only one input has value", async () => {
  render(
    <ReduxProvider store={store}>
      <LoginForm />
    </ReduxProvider>
  );

  const email = screen.getByTestId("email");

  //eslint-disable-next-line
  await act(async () => {
    userEvent.type(email, "text");
  });

  expect(screen.getByRole("button")).toBeDisabled();
});

test("it should enable the submit button when the inputs are not empty", async () => {
  render(
    <ReduxProvider store={store}>
      <LoginForm />
    </ReduxProvider>
  );

  const email = screen.getByTestId("email");
  const password = screen.getByTestId("password");

  //eslint-disable-next-line
  await act(async () => {
    userEvent.type(email, "text");
  });
  //eslint-disable-next-line
  await act(async () => {
    userEvent.type(password, "text");
  });

  expect(screen.getByRole("button")).toBeEnabled();
});
