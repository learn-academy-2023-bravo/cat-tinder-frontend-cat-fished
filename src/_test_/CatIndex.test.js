import { screen, render } from "@testing-library/react";
import CatIndex from "../pages/CatIndex";
import mockCats from "../mockCats";

describe("<CatIndex />", () => {
  it("displays the cat index for the user.", () => {
    render(<CatIndex />);
    expect(screen.getByText(/CatIndex/i)).toBeInTheDocument();
  });

  it('displays all the cat cards for the user', () => {
    const div = document.createElement('div')
    render(<CatIndex cats={mockCats} />, div)
    mockCats.forEach((cat)=> {
      const catName = screen.getByText(cat.name)
      expect(catName).toBeInTheDocument()
    })

  })
});
