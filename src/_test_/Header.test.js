import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

fdescribe("<Header />", () => {
  it("render the header for the user.", () => {
    render(<Header />);
    expect(screen.getByText(/catfished dating/i)).toBeInTheDocument();
  });
});