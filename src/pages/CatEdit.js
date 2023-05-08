import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams();
  const currentCat = cats?.find((cat) => cat.id === +id);
  const navigate = useNavigate();

  const [editCat, setEditCat] = useState({
    
      name: currentCat?.name || '',
      age: currentCat?.age || '',
      enjoys: currentCat?.enjoys || '',
      image: currentCat?.image || ''
  });

  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const handleSubmit = () => {
    updateCat(editCat, currentCat.id);
    navigate("/");
  };
  return (
    <>
      <>
        <Form>
          <FormGroup>
            <Label for="update name">What Is Your Name?</Label>
            <Input
              id="cat-name"
              name="name"
              placeholder="enter your name here"
              type="text"
              onChange={handleChange}
              value={editCat.name}
            />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="update age">What Is Your Age?</Label>
            <Input
              id="cat-age"
              name="age"
              placeholder="enter your age here"
              type="text"
              onChange={handleChange}
              value={editCat.age}
            />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="update enjoys">What Do You Enjoy?</Label>
            <Input
              id="cat-enjoys"
              name="enjoys"
              placeholder="enter what you enjoy"
              type="text"
              onChange={handleChange}
              value={editCat.enjoys}
            />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="update image">Upload Photo</Label>
            <Input
              id="cat-image"
              name="image"
              placeholder="enter your image url"
              type="text"
              onChange={handleChange}
              value={editCat.image}
            />
            
              <Button onClick={handleSubmit} name="submit">
                Submit Changes
              </Button>
            
          </FormGroup>
        </Form>
        {/* style button later */}
      </>
    </>
  );
};
export default CatEdit;
