import { screen, render } from "@testing-library/react";
import CatIndex from "../pages/CatIndex";

describe("<CatIndex />", () => {
  it("displays the cat index for the user.", () => {
    render(<CatIndex />);
    expect(screen.getByText(/CatIndex/i)).toBeInTheDocument();
  });
});
