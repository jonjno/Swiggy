import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load button contact", () => {
  render(<Contact />);
  const button = screen.getByText("submit");

  expect(button).toBeInTheDocument();
});

it("shoul load 2 input boxes", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(2);
  //   all inout element
});
