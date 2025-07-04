import Container from "react-bootstrap/esm/Container"
import Search from "./components/search"
import Row from "react-bootstrap/esm/Row"
import { Col } from "react-bootstrap"
import ListProfile from "./components/ListProfile";

function App() {

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Search />
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col>
            <ListProfile />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
