import "./App.css";
import { Navbar, Icon, NavItem, Dropdown, Divider } from "react-materialize";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Bio from "./components/Bio";
import Resume from "./components/Resume";
import CoverLetter from "./components/CoverLetter";
import Pokedex from "./components/Pokedex";
import ChatApp from "./components/ChatApp";
import Employee from "./components/Employee";
import RecipeApp from "./components/RecipeApp";
import Capstone from "./components/Capstone";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          alignLinks="right"
          brand={
            <Link
              className="brand-logo left"
              to="/"
              style={{ color: "#F67451", fontWeight: "bold" }}
            >
              Justin Bartlett
            </Link>
          }
          centerChildren
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
          style={{
            backgroundImage: "linear-gradient(#0E103D, #171A64)",
          }}
        >
          <NavItem>
            <Link to="/resume">Resume</Link>
          </NavItem>
          <NavItem>
            <Link to="/cover-letter">Cover Letter</Link>
          </NavItem>
          <Dropdown
            options={{
              alignment: "left",
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              container: null,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250,
            }}
            trigger={
              <a href="#!">
                Work Examples <Icon right>arrow_drop_down</Icon>
              </a>
            }
          >
            <Link to={"/capstone"}>Capstone Project</Link>
            <Divider />
            <Link to={"/chat-app"}>Chat App</Link>
            <Link to={"/recipe-app"}>Recipe Application</Link>
            <Link to={"/employee-app"}>Employee Management App</Link>
            <Link to="/pokedex">Pokedex</Link>
          </Dropdown>
        </Navbar>

        <Routes>
          <Route path="/" element={<Bio />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/cover-letter" element={<CoverLetter />}></Route>
          <Route path="/pokedex" element={<Pokedex />}></Route>
          <Route path="/chat-app" element={<ChatApp />}></Route>
          <Route path="/employee-app" element={<Employee />}></Route>
          <Route path="/recipe-app" element={<RecipeApp />}></Route>
          <Route path="/capstone" element={<Capstone />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
