"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  return (
    <Navbar data-bs-theme="light" style={{ backgroundColor: "#eee" }}>
      <Container>
        <Navbar.Brand href="/">Verlan Dictionary</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link href="#features">My Note</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
