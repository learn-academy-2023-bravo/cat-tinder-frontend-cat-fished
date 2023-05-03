import { screen, render } from "@testing-library/react";
import NotFound from "../pages/NotFound";
import errorPic from "../assets/errorPic.png";

describe("<NotFound />", () => {
  it("displays an image to the user.", () => {
    render(<NotFound />);
    const errorImage = screen.getByAltText(/404 not found/i);
    expect(errorImage).toBeInTheDocument();
    expect(errorImage.src).toContain(errorPic);
  });
});
