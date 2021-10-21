import React from "react";
import { render, screen } from "@testing-library/react";
import SignIn from "./signIn";

describe("signIn", () => {
  it("renders title", () => {
    render(<SignIn />);
    const linkElement = screen.getByText(/sign in/i);
    expect(linkElement).toBeInTheDocument();
  });

  describe("email", () => {
    it("renders email input", () => {
      render(<SignIn />);
      const linkElement = screen.getByPlaceholderText(
        /Enter your email address/i
      );
      expect(linkElement).toBeInTheDocument();
    });
    it("renders email label", () => {
      render(<SignIn />);
      const linkElement = screen.getByText(/E-mail address/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe("password", () => {
    it("renders password input", () => {
      render(<SignIn />);
      const linkElement = screen.getByPlaceholderText(/Enter your password/i);
      expect(linkElement).toBeInTheDocument();
    });
    it("renders password label", () => {
      render(<SignIn />);
      const linkElement = screen.getByText(/Password/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it("renders continue button", () => {
    render(<SignIn />);
    const linkElement = screen.getByRole("button");
    expect(linkElement).toHaveTextContent(/Continue/i);
  });

  describe('footer', () => {
    it("renders footer", () => {
      render(<SignIn />);
      const linkElement = screen.getByText(/Not out member yet/i);
      expect(linkElement).toBeInTheDocument();
    });
    it("renders link to signup page", () => {
      render(<SignIn />);
      const linkElement = screen.getByRole('link');
      expect(linkElement.getAttribute('href')).toMatch(/.*\/signup/i);
    });
    
  })
  
});
