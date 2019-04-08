import React from 'react';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
class Header extends React.Component {
    
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                   <Container>
                   <Col xs={6} md={4}>
                        <Image src="https://previews.123rf.com/images/koltukovalek/koltukovalek1703/koltukovalek170300001/73082340-pizza-delivering-logo-illustration-of-pizza-with-sausage-and-mushrooms-piece-of-pie-fastfood-round-b.jpg" rounded />
                    </Col>
                   </Container>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
    export default Header;