import React, { Component } from 'react';
import { Navbar,NavDropdown,Form,FormControl,Button,Nav } from 'react-bootstrap';


class NavTop extends Component {
  render() {   
    return <div>
<Navbar  fixed="top" bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className = "mr-auto">
    <Form  className = "mr-auto" inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-4" />
      <Button variant="outline-success">Search</Button>
    </Form>

      <div className = " d-flex ml-auto">
      <Nav.Link  href="#home">Account</Nav.Link>
      <Nav.Link  href="#link">Cart</Nav.Link>
      </div>
  </Navbar.Collapse>
</Navbar>
  
<div className = "d-flex justify-content-between">
  <div>item 1</div>
  <div>item 2</div>
  <div>item 3</div>
</div>
    </div>
  }
}

export default NavTop;
