
import { Container, Nav, NavDropdown, Navbar, Form, FormControl, Button, Row, Col, Breadcrumb, Table, Tab, Tabs, Sonnet, ProgressBar, Pagination, OverlayTrigger } from "react-bootstrap";
import Popovert from "./popover";
import Koleps from "./collapse";

function App() {
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Berita">Berita</Nav.Link>
              <Nav.Link href="#Live Scores">Live Scores</Nav.Link>
              <NavDropdown title="Piala & Liga" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Liga Inggris</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">UCL</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Liga Spanyol</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Liga Lain</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#TransferPemain">Transfer Pemain</Nav.Link>
              <Nav.Link href="#Tim">Tim</Nav.Link>

            </Nav>
            <Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col sm={8}></Col>
          <Col sm={4}>
            <Button variant="light" style={{ width: "340px" }}>
              <Breadcrumb >
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Liga Inggris
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
              </Breadcrumb>
            </Button>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Col></Col>
          <Col xs={9}>
            <h3>Rumor Transfer Pemain</h3>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={9}>
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Home">
                {/* <Sonnet /> */}
              </Tab>
              <Tab eventKey="profile" title="Profile">
                {/* <Sonnet /> */}
              </Tab>
              <Tab eventKey="contact" title="Contact" disabled>
                {/* <Sonnet /> */}
              </Tab>
            </Tabs>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={9}>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Pemain</th>
                  <th>Tim</th>
                  <th>Transfer</th>
                  <th>Proses Transfer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>MAROUANE FELLAINI</td>
                  <td>MANCHESTER UNITED</td>
                  <td>SHANGDONG LUNENG</td>
                  <td><ProgressBar animated now={80} label={'85%'} /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LUIS NANI</td>
                  <td>SPORTING CP</td>
                  <td>ORLANDO CITY</td>
                  <td><ProgressBar animated now={55} label={'55%'} /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MARREK HAMSIK</td>
                  <td>NAPOLI</td>
                  <td>DALIAN YIFANG</td>
                  <td><ProgressBar animated now={95} label={'95%'} /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SARDAR ASMOUN</td>
                  <td>RUBIN KAZAN</td>
                  <td>ZENIT ST PITERSBERG</td>
                  <td><ProgressBar animated now={100} label={'100%'} /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>MITCHI BATSUAYI</td>
                  <td>CHELSEA</td>
                  <td>CRYSTAL PALACE</td>
                  <td><ProgressBar animated now={50} label={'50%'} /></td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col></Col>
          <Col xs={10}>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item >{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col >
            <Popovert/>
          </Col>
          <Col xs={6}>
          <Koleps/>
          </Col>
          <Col ></Col>
        </Row>
      </Container>
      


     

    </>

  );
}

export default App;
