import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Search from "./components/search";

export default function Result() {

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Search />
          </Col>
        </Row>
      </Container>
    </>
  )
}