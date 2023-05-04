import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CatNew = ({ createCat }) => {
  const navigate = useNavigate();
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value)
    setNewCat({ ...newCat, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createCat(newCat);
    navigate("/");
  };

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="create name">What Is Your Name?</Label>
          <Input
            id="cat-name"
            name="name"
            placeholder="enter your name here"
            type="text"
            onChange={handleChange}
            value={newCat.name}
          />
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <Label for="create age">What Is Your Age?</Label>
          <Input
            id="cat-age"
            name="age"
            placeholder="enter your age here"
            type="text"
            onChange={handleChange}
            value={newCat.age}
          />
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <Label for="create enjoys">What Do You Enjoy?</Label>
          <Input
            id="cat-enjoys"
            name="enjoys"
            placeholder="enter what you enjoy"
            type="text"
            onChange={handleChange}
            value={newCat.enjoys}
          />
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <Label for="create image">Upload Photo</Label>
          <Input
            id="cat-image"
            name="image"
            placeholder="enter your image url"
            type="text"
            onChange={handleChange}
            value={newCat.image}
          />
        </FormGroup>
      </Form>
      {/* style button later */}
      <div>
        <Button onClick={handleSubmit} name="submit" color="primary">
          Click Me
        </Button>
      </div>
    </>
  );
};

export default CatNew;
