import { screen, render } from "@testing-library/react";
import CatIndex from "../pages/CatIndex";
import mockCats from "../mockCats";
import { Router, BrowserRouter} from "react-router-dom";

describe("<CatIndex />", () => {
  it("displays the cat index for the user.", () => {
    render(
      
      
      <BrowserRouter>
    <CatIndex />
    </BrowserRouter>
    
    
    );
    expect(screen.getByText(/Cat Index/i)).toBeInTheDocument();
  });

  it('displays all the cat cards for the user', () => {
    screen.logTestingPlaygroundURL()
    
    render(
      
      
      <BrowserRouter>
        <CatIndex cats={mockCats} />
      </BrowserRouter>
    
    )
      expect(screen.getAllByText(/fat cat 2/i)).toBeInTheDocument()
    

  })
});
