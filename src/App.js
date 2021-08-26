import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateClient from "./components/create-client.component";
import EditClient from "./components/edit-client.component";
import ClientList from "./components/client-list.component";
import ClientDashboard  from './components/ClientDashboard';

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-client"} className="nav-link">
                Record360 client portal
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-client"} className="nav-link">
                  New Client? Register here
                </Link>
                <Link to={"/client-dashboard"} className="nav-link">
                Client Dashboard
              </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/edit-client/:id"} className="nav-link">
                  Edit Client
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/client-list"} className="nav-link">
                  Client List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateClient} />
                <Route path="/create-client" component={CreateClient} />
                <Route path="/client-dashboard" component={ClientDashboard} />
                <Route path="/edit-client/:id" component={EditClient} />
                <Route path="/client-list" component={ClientList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;