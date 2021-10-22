import React from "react";
import { render, screen } from "@testing-library/react";
import SignIn from "./signIn";

describe("signIn", () => {
  it("renders title", () => {
    render(<SignIn />);
    const titleElement = screen.getByText(/sign in/i);
    expect(titleElement).toBeInTheDocument();
  });

  describe("email", () => {
    it("renders email input", () => {
      render(<SignIn />);
      const inputElement = screen.getByPlaceholderText(
        /Enter your email address/i
      );
      expect(inputElement).toBeInTheDocument();
    });
    it("renders email label", () => {
      render(<SignIn />);
      const labelElement = screen.getByText(/E-mail address/i);
      expect(labelElement).toBeInTheDocument();
    });
  });

  describe("password", () => {
    it("renders password input", () => {
      render(<SignIn />);
      const inputElement = screen.getByPlaceholderText(/Enter your password/i);
      expect(inputElement).toBeInTheDocument();
    });
    it("renders password label", () => {
      render(<SignIn />);
      const labelElement = screen.getByText(/Password/i);
      expect(labelElement).toBeInTheDocument();
    });
  });

  it("renders continue button", () => {
    render(<SignIn />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent(/Continue/i);
  });

  describe("footer", () => {
    it("renders footer", () => {
      render(<SignIn />);
      const textElement = screen.getByText(/Not out member yet/i);
      expect(textElement).toBeInTheDocument();
    });
    it("renders link to signup page", () => {
      render(<SignIn />);
      const linkElement = screen.getByRole("link");
      expect(linkElement.getAttribute("href")).toMatch(/.*\/signup/i);
    });
  });
});
