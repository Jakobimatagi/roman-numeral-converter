import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RomanConverter from "../components/RomanConverter";

describe("RomanConverter Component", () => {
  test("renders RomanConverter component", () => {
    render(<RomanConverter />);
    expect(screen.getByText("Roman Numeral Converter")).toBeInTheDocument();
  });

  test("updates input field on change", () => {
    render(<RomanConverter />);
    const inputField = screen.getByPlaceholderText("Enter Number Here");
    fireEvent.change(inputField, { target: { value: "10" } });
    expect(inputField.value).toBe("10");
  });

  test("converts number to Roman numeral correctly", () => {
    render(<RomanConverter />);
    const inputField = screen.getByPlaceholderText("Enter Number Here");
    const convertButton = screen.getByText("Convert");
    fireEvent.change(inputField, { target: { value: "10" } });
    fireEvent.click(convertButton);
    expect(screen.getByText("X")).toBeInTheDocument();
  });

  test("displays error for invalid input", () => {
    render(<RomanConverter />);
    const inputField = screen.getByPlaceholderText("Enter Number Here");
    const convertButton = screen.getByText("Convert");
    fireEvent.change(inputField, { target: { value: "5000" } });
    fireEvent.click(convertButton);
    expect(screen.getByText("Input is out of range")).toBeInTheDocument();
  });

  test("clears error message when close button is clicked", () => {
    render(<RomanConverter />);
    const inputField = screen.getByPlaceholderText("Enter Number Here");
    const convertButton = screen.getByText("Convert");
    fireEvent.change(inputField, { target: { value: "5000" } });
    fireEvent.click(convertButton);
    const closeButton = screen.getByText("X");
    fireEvent.click(closeButton);
    expect(screen.queryByText("Input is out of range")).not.toBeInTheDocument();
  });
});
