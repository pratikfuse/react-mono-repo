import React from "react";
import { Button } from "./button";
import { cleanup, render } from "@testing-library/react";

describe("Button Component", () => {
  afterEach(() => cleanup());

  it("renders a button", () => {
    const { queryByRole } = render(<Button onClick={() => {}}>Click</Button>);
    expect(queryByRole("button")).toBeTruthy();
  });
});
