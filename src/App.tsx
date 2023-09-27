import React from 'react';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <>
      <div className="bg-black text-white z-index-1000">
        <p className="text-center ">!Envios gratis por compras superiores a $$$$$$$</p>
      </div>
      <div className='pt-2 pb-4 border-bottom'>
        <Container>

          <Row>
            <Col xs={3} className="mt-2">
              <span>SuperMercado</span>
            </Col>
            <Col xs={6} className="text-center">
              <Form className="position-relative">
                <input
                  type="search"
                  className="form-control rounded-pill pr-5"
                  placeholder="Buscar"
                  aria-label="Search"
                />
              </Form>
            </Col>
            <Col xs={1} className="text-right ml-auto mt-2">
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={faUser} className="mr-3" /> Login
              </a>
            </Col>
            <Col xs={1} className="text-right mt-2">
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ margin: '3rem' }}>
        <Container >
          <Row>
            <Col>
              <Card className="d-inline-block" style={{ width: '15rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Nombre del producto</Card.Title>
                  <Card.Text>
                    Descripcion
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>$XXX.XXX</span>
                    &nbsp;
                    &nbsp;
                    <span style={{ textDecoration: 'line-through' }}>$XXX.XXX</span>
                  </Card.Text>
                  <Card.Text>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>-$XX. %</span>
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="d-inline-block" style={{ width: '15rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Nombre del producto</Card.Title>
                  <Card.Text>
                    Descripcion
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>$XXX.XXX</span>
                    &nbsp;
                    &nbsp;
                    <span style={{ textDecoration: 'line-through' }}>$XXX.XXX</span>
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="d-inline-block" style={{ width: '15rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Nombre del producto</Card.Title>
                  <Card.Text>
                    Descripcion
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>$XXX.XXX</span>
                    &nbsp;
                    &nbsp;
                    <span style={{ textDecoration: 'line-through' }}>$XXX.XXX</span>
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="d-inline-block" style={{ width: '15rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Nombre del producto</Card.Title>
                  <Card.Text>
                    Descripcion
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>$XXX.XXX</span>
                    &nbsp;
                    &nbsp;
                    <span style={{ textDecoration: 'line-through' }}>$XXX.XXX</span>
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
