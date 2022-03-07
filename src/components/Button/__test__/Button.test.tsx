import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "..";

test("it should render a button with the desirable text", () => {
  render(<Button>Click</Button>);
  expect(screen.getByRole("button").innerHTML).toBe("Click");
});

test("it should call the onclick function when clicked", () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Button</Button>);
  fireEvent.click(screen.getByRole("button"));

  expect(onClick).toHaveBeenCalled();
});
