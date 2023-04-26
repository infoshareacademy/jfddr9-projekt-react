import { render, screen } from "@testing-library/react";

import { LoadingSpinner } from ".";

describe("LoadingSpinner", () => {
  it("shuld render", () => {
    
    //given
    render(<LoadingSpinner></LoadingSpinner>);

    //then
    const element = screen.getAllByTestId("dot-element");
    element.forEach((e) => {
      expect(e).toBeInTheDocument();
    });
  });
});
