import { render, screen, fireEvent } from "@testing-library/react";

import App from "../App";

describe("element testing", () => {
  // create a test case
  it("check for hello", () => {
    render(<App />);
    let element = screen.getByText(/hello/i); // query here getByText => queryMethod where it return on one element
    //assertion ==> assert methods
    expect(element).toBeInTheDocument();
  });

  it("p element must be 2", () => {
    render(<App />);
    let elementList = screen.getAllByText("This is para");
    expect(elementList).toHaveLength(2);
  });
});

describe("event base testing", () => {
  it("on click element is invisible", () => {
    render(<App />);
    let button = screen.getByRole("button");
    let h1Element = screen.getByTestId("h1-element");
    expect(h1Element).toBeVisible();
    fireEvent.click(button);
    expect(h1Element).not.toBeVisible();
  });
});
