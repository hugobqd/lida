import React, { useState } from "react";
import { Link } from "gatsby";
import Burger from "./icons/Burger";
import styled from "styled-components";
import { breakpoints as bp } from "../style/breakpoints";
import contact from "../settings/contact.json";
import css from "@styled-system/css";
import fluid from "fluid-system";

const fontSize = css({ fontSize: ["12px", "16px", "20px"] });

const Header = styled.header``;

const NavMain = styled.nav`
  background-color: ${(p) => p.theme.colors.lavender};
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  height: ${(p) => p.theme.sizes.unit};
  z-index: ${(p) => p.theme.zIndexes.navBar};
  ${fluid(fontSize)}

  @media ${(p) => p.theme.bp[0]} {
    position: absolute;
    top: 0;
    width: auto;
    bottom: auto;
    padding-left: 1em;
  }

  a {
    color: black;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    @media (min-width: 1000px) {
      padding-left: 0.75em;
      padding-right: 0.75em;
    }
    /* padding: 1em; */
  }
  .logo {
    font-weight: 900;
  }
  .burger {
    background-color: ${(p) => p.theme.colors.lavender};
    border: none;
    display: block;
    width: ${(p) => p.theme.sizes.unit};
    height: ${(p) => p.theme.sizes.unit};
  }
`;
const NavFull = styled.nav`
  @media ${bp.laptop} {
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.lavender};
  z-index: ${(p) => p.theme.zIndexes.navFull};
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: ${(props) => props.theme.colors.dark};
    display: block;
  }
  .first {
    font-size: 3rem;
  }
  .second {
    font-size: 1.5rem;
  }
`;

const Navbar = (props) => {
  const [active, setActive] = useState(false);

  return (
    <Header role="navigation" aria-label="main-navigation">
      <NavMain>
        <Link to="/" className="logo">
          L'image d'après
        </Link>
        <Link to="/production">Production</Link>
        <Link to="/postproduction">Postproduction</Link>
        <button
          className={`burger ${active ? "is-active" : ""}`}
          data-target="navMenu"
          onClick={() => setActive(!active)}
          aria-label="Ouvrir le menu"
          aria-haspopup="true"
          aria-controls="menu"
          id="menubutton"
        >
          <Burger />
        </button>
      </NavMain>
      {active && (
        <NavFull
          id="menu"
          className={`nav-full ${active ? "is-active" : ""}`}
          // role="menu"
          aria-labelledby="menubutton"
        >
          <div className="first">
            <Link
              to="/"
              style={{ textTransform: "uppercase", fontWeight: 900 }}
            >
              L'image d'après
            </Link>
            <Link to="/a-propos">À propos</Link>
            <Link to="/production">Production</Link>
            <Link to="/postproduction">Postproduction</Link>
            <Link to="/actualites">Actualités</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link  to="/contact/examples">
              Form Examples
            </Link> */}
          </div>
          <div className="second" style={{ paddingLeft: "30%" }}>
            {contact.facebook && <Link to={contact.facebook}>Facebook</Link>}
            {contact.vimeo && <Link to={contact.vimeo}>Vimeo</Link>}
          </div>
        </NavFull>
      )}
    </Header>
  );
};

export default Navbar;
