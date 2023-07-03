import { render, screen } from "@testing-library/react";
import Analytic from "./analytic";

describe("Analytic component", () => {
  it("should render analytics component correctly", () => {
    render(<Analytic />);
    const element = screen.getByRole("div");
    expect(element).toBeInTheDocument();
  });
});