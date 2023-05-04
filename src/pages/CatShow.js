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
    {/* <main className='flex flex-wrap justify-center'>
              { selectedCat && (
              <Card
                style={{
                  width: "50rem",
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
              </main> */}
              <main class="grid justify-center items-center min-h-screen p-8">
  <div class="
    group
    inline-block pb-4 bg-gradient-to-tr from-purple-600 to-orange-400 text-white overflow-hidden rounded-2xl shadow
    hover:shadow-md
    transition
  ">
    <figure class="max-h-64 aspect-square overflow-hidden">
      <img 
           class="w-full h-full object-cover transition group-hover:scale-125"
           src={selectedCat.image}
       />
    </figure>
    <div class="p-4">
      <h3 class="text-xl font-bold">{ selectedCat.name}      Age:{ selectedCat.age }</h3>
      <p class="font-serif">{ selectedCat.enjoys }</p>
    </div>
    <footer class="flex gap-2 px-4">
      <button class="text-blue-400 hover:text-red-400">
        <i class="fa-solid fa-heart"></i>
      </button>
      <button class="text-blue-400 hover:text-red-400">
        <i class="fa-solid fa-comment"></i>
      </button>
    </footer>
  </div>
</main>
    </>
  )
}

export default CatShow