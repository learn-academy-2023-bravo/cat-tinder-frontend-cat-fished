import { screen, render } from "@testing-library/react";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  it("footer renders for user.", () => {
    render(<Footer />);

    expect(
      screen.getByText(/developed by demario and mark/i)
    ).toBeInTheDocument();
  });
});
