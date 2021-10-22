import { render, screen } from "@testing-library/react";
import SignUp from "./signUp";

describe("signUp", () => {
  it("renders title", () => {
    render(<SignUp />);
    const titleElement = screen.getByText(/sign up/i);
    expect(titleElement).toBeInTheDocument();
  });

  describe("email", () => {
    it("renders email input", () => {
      render(<SignUp />);
      const inputElement = screen.getByPlaceholderText(
        /Enter your email address/i
      );
      expect(inputElement).toBeInTheDocument();
    });
    it("renders email label", () => {
      render(<SignUp />);
      const labelElement = screen.getByText(/E-mail address/i);
      expect(labelElement).toBeInTheDocument();
    });
  });

  describe("full name", () => {
    it("renders full name input", () => {
      render(<SignUp />);
      const inputElement = screen.getByPlaceholderText(
        /Enter your full name/i
      );
      expect(inputElement).toBeInTheDocument();
    });
    it("renders full name label", () => {
      render(<SignUp />);
      const labelElement = screen.getByText(/Full name/i);
      expect(labelElement).toBeInTheDocument();
    });
  });

  describe("password", () => {
    it("renders password input", () => {
      render(<SignUp />);
      const inputElement = screen.getByPlaceholderText(/enter your password/i);
      expect(inputElement).toBeInTheDocument();
    });
    it("renders password label", () => {
      render(<SignUp />);
      const labelElement = screen.getByTestId("passwordLabel");
      expect(labelElement).toHaveTextContent(/password/i);
    });
  });

  describe("passwordConfirmation", () => {
    it("renders passwordConfirmation input", () => {
      render(<SignUp />);
      const inputElement = screen.getByPlaceholderText(/confirm your password/i);
      expect(inputElement).toBeInTheDocument();
    });
    it("renders passwordConfirmation label", () => {
      render(<SignUp />);
      const labelElement = screen.getByText(/Confirm your password/i);
      expect(labelElement).toBeInTheDocument();
    });
  });

  it("renders continue button", () => {
    render(<SignUp />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent(/Continue/i);
  });

  describe('footer', () => {
    it("renders footer", () => {
      render(<SignUp />);
      const textElement = screen.getByText(/Already using our app/i);
      expect(textElement).toBeInTheDocument();
    });
    it("renders link to signin page", () => {
      render(<SignUp />);
      const linkElement = screen.getByRole('link');
      expect(linkElement.getAttribute('href')).toMatch(/.*\/signin/i);
    });
    
  })
  
});
