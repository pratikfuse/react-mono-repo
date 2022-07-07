import React from "react";
import { Button } from "./button";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

describe("Button Component", () => {
  afterEach(() => cleanup());
  it("renders a button", () => {
    const { queryByRole, queryByText } = render(
      <Button onClick={() => {}}>Click</Button>
    );
    expect(queryByRole("button")).toBeTruthy();
    expect(queryByText("Click")).toBeTruthy();
  });

  it("handles button clicks", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toBeCalled();
  });
});
