import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import CatEdit from "../pages/CatEdit";

describe("<CatEdit />", () => {
  const cats = [
    {
      id: 1,
      name: "Bulbasaur",
      age: 1,
      enjoys: "I enjoy break dancing",
      image:
        "https://cosplayfu-website.s3.amazonaws.com/_Upload/b/30cm-Bulbasaur-Pokemon-Plush-Toy.jpg",
    },
  ];

  it("renders the edit cat form", () => {
    const updateCat = jest.fn();
    render(
      <MemoryRouter initialEntries={["/catedit/1"]}>
        <Route path="/catedit/:id">
          <CatEdit cats={cats} updateCat={updateCat} />
        </Route>
      </MemoryRouter>
    );

    const nameInput = screen.getByLabelText(/What Is Your Name?/i);
    fireEvent.change(nameInput, { target: { value: "Pikachu" } });
    expect(nameInput.value).toBe("Pikachu");

    const ageInput = screen.getByLabelText(/What Is Your Age?/i);
    fireEvent.change(ageInput, { target: { value: "2" } });
    expect(ageInput.value).toBe("2");

    const enjoysInput = screen.getByLabelText(/What Do You Enjoy?/i);
    fireEvent.change(enjoysInput, { target: { value: "I enjoy playing games" } });
    expect(enjoysInput.value).toBe("I enjoy playing games");

    const imageInput = screen.getByLabelText(/Upload Photo/i);
    fireEvent.change(imageInput, {
      target: {
        value:
          "https://cosplayfu-website.s3.amazonaws.com/_Upload/b/30cm-Pikachu-Pokemon-Plush-Toy-1.jpg",
      },
    });
    expect(imageInput.value).toBe(
      "https://cosplayfu-website.s3.amazonaws.com/_Upload/b/30cm-Pikachu-Pokemon-Plush-Toy-1.jpg"
    );

    fireEvent.click(screen.getByRole("button", { name: /edit/i }));
    expect(updateCat).toHaveBeenCalledTimes(1);
    expect(updateCat).toHaveBeenCalledWith(
      {
        name: "Pikachu",
        age: "2",
        enjoys: "I enjoy playing games",
        image:
          "https://cosplayfu-website.s3.amazonaws.com/_Upload/b/30cm-Pikachu-Pokemon-Plush-Toy-1.jpg",
      },
      1
    );
  });
});
