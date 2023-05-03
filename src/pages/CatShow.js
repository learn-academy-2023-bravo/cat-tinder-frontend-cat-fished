import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, NavLink} from 'reactstrap'



const CatShow = ({ cats }) => {
  const { id } = useParams()
  let selectedCat = cats.find(cat => cat.id === +id)
  console.log("id: ", id)
  return (
    <>
    <div>CatShow</div>
    <main>
              { selectedCat && (
              <Card
                style={{
                  width: "18rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">{ selectedCat.name }</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    { selectedCat.age }
                  </CardSubtitle>
                </CardBody>
                <img
                  alt="Card cap"
                  src={ selectedCat.image }
                  width="100%"
                />
                <CardBody>
                  <CardText>
                    { selectedCat.enjoys }
                  </CardText>
                  <CardLink href="#">Card Link</CardLink>
                  <CardLink href="#">Another Link</CardLink>
                </CardBody>
              </Card>
              )}
              </main>
              

    </>
  )
}

export default CatShow