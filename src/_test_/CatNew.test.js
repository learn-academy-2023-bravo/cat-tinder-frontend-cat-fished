import { screen, render } from "@testing-library/react";
import CatNew from "../pages/CatNew.js";
import { BrowserRouter } from "react-router-dom";

describe("<CatNew />", () => {
  it("renders the new cat form", () => {
    render(
      <BrowserRouter>
        <CatNew />
      </BrowserRouter>
    );

    expect(screen.getByText(/what is your name\?/i)).toBeInTheDocument();

    screen.logTestingPlaygroundURL();

    expect(
      screen.getByPlaceholderText(/enter your age here/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });
});
