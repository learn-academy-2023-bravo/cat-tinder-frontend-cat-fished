import React from 'react'
import heroLogo from '../assets/heroLogo.png'
import { Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'
import { NavLink } from 'react-router-dom'

const CatIndex = ({ cats }) => {
  ;
  return (
    <>
    
      <div>
        <div>
          <p className="flex justify-center text-5xl font-display "></p>
          <div className="flex justify-center  ">
            <img src={heroLogo} alt="company logo" />
          </div>
        </div>
      </div>
      <h1>Cat Index</h1>
      <main>
        {cats?.map(({ cat, index, name, image, enjoys, age, id }) => {
          return (
            <>
              <Card
                style={{
                  width: "18rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">{ name }</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    { age }
                  </CardSubtitle>
                </CardBody>
                <img
                  alt="Card cap"
                  src={ image }
                  width="100%"
                />
                <CardBody>
                  <CardText>
                    { enjoys }
                  </CardText>
                  <NavLink to={`/catshow/${id}`}>Check Meowt</NavLink>
                </CardBody>
              </Card>
            </>
          );
        })}
      </main>
    </>
  );
};

export default CatIndex