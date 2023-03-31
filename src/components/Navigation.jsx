import { Navbar, Nav, Image, NavLink } from "react-bootstrap";
import { FaSearch, FaBell, FaUser} from "react-icons/fa";

const Navigation = () => {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#221f1f", color: "white" }}>
      <NavLink className="pl-0">
        <Image src="./assets/images/logo.png" style={{ width: "100px", height: "55px" }} />
      </NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="font-weight-bold">
            Home
          </Nav.Link>
          <Nav.Link href="#link" className="active font-weight-bold">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#link" className="font-weight-bold">
            Movies
          </Nav.Link>
          <Nav.Link href="#link" className="font-weight-bold">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#link" className="font-weight-bold">
            My List
          </Nav.Link>
        </Nav>
        <FaSearch className="mx-3" />
        <div>Kids</div>
        <FaBell className="mx-3" />
        <FaUser />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
