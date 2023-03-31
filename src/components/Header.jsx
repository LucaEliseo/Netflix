import Navigation from "./Navigation";
import Hero from "./Hero"
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { Dropdown, Button } from "react-bootstrap";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#221f1f", color: "white" }}>
      <Navigation />
      <Hero />
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-5 mt-3 pl-4 pr-4">TV Shows</h2>
          <Dropdown>
            <Dropdown.Toggle
              as={Button}
              variant="light"
              style={{ backgroundColor: "#221f1f" }}
              className="text-light rounded-0 mt-3 "
            >
              Genres &nbsp;
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ backgroundColor: "#221f1f" }} variant="dark">
              <Dropdown.Item className="text-light">Comedy</Dropdown.Item>
              <Dropdown.Item className="text-light">Drama</Dropdown.Item>
              <Dropdown.Item className="text-light">Thriller</Dropdown.Item>
              <Dropdown.Item className="text-light">Action</Dropdown.Item>
              <Dropdown.Item className="text-light">Adventures</Dropdown.Item>
              <Dropdown.Item className="text-light">Romantic</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div style={{ fontSize: "1.2em" }}>
          <BsFillGridFill className="mt-4 " />
          <BsFillGrid3X3GapFill className="mx-4 mt-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
