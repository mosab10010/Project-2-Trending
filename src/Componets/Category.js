import { Card, Row, Col, Container, Button, Image } from "react-bootstrap"
import {Link} from "react-router-dom"
function Category() {
  return (
    <Container>
      <Row xs={1} md={2} className="g-4 mt-5 mb-3">
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height ="400px" />
            <Card.Body>
              <Card.Title>Books</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </Card.Text>
              
              <Link to="/books">Go To Books</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"height ="400px" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </Card.Text>
              <Link to="/films">Go To Films</Link>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4 mt-5 mb-3">
        <Col>
          <Card>
            <Card.Img variant="top" src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3945683%2Fpexels-photo-3945683.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D650%26w%3D940" height ="400px" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </Card.Text>
              <Link to="/games">Go To Games</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F270085%2Fpexels-photo-270085.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D650%26w%3D940" height ="400px" />
            <Card.Body>
              <Card.Title>Football</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </Card.Text>
              <Link to="/football">Go To Football</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card className="bg-dark text-white">
  <Card.Img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1616470%2Fpexels-photo-1616470.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D1" alt="Card image" height ="200px" width ="40000px" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
    <Link to="/music">Go To Music</Link>
  </Card.ImgOverlay>
</Card>
    </Container>
  )
}

export default Category
