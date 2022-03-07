import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import Navbar from "..";

test("it should render render Book Store as the Navbar title", () => {
  render(<Navbar />);
  expect(screen.getByText("Book Store")).toBeInTheDocument();
});
