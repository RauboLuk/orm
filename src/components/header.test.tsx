import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("header", () => {
  it("renders logo", () => {
    render(<Header />);
    const imgElement = screen.getByTestId("logo");
    expect(imgElement).toBeInTheDocument();
  });
  it("has alt text", () => {
    render(<Header />);
    const imgElement = screen.getByAltText("logo");
    expect(imgElement).toBeInTheDocument();
  });
});
