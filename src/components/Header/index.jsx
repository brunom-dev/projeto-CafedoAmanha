import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './header.css';

export default function Header() {
    return (
        <Navbar expand="lg" bg="brown" variant="dark" sticky="top" className={'navbar-styles'}>
            <Container>
                <Navbar.Brand as={Link} to="/">Café do Amanhã</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Início</Nav.Link>
                        <Nav.Link as={Link} to="/about">Sobre Nós</Nav.Link>
                        <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                        <Nav.Link as={Link} to="/orders">Pedidos</Nav.Link>
                        <Nav.Link as={Link} to="/stories">Histórias</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

