import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addBook, setSearchTerm } from '../Redux/bookSlice'; 
import '../App.css'; 

function Header() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [searchTerm, setSearchTermState] = useState(''); 
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ id: Date.now(), title, author }));
    setTitle('');
    setAuthor('');
    handleClose();
    alert("Book added successfully");
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTermState(value);
    dispatch(setSearchTerm(value)); 
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-primary">
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <Navbar.Brand href="" className="navbar-title text-light">Book Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav style={{justifyContent:"space-between"}}>
              <Form inline>
                <Form.Control
                  type="search"
                  placeholder="Search Books"
                  className="mr-sm-2"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </Form>
              <Button variant="outline-light" className="add-book-btn" onClick={handleShow}>
                Add Book
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Add New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Book Title"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter author Name"
                required
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Add Book
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;
