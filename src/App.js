import React from "react";
import { useRoutes } from "hookrouter";
import Routers from "./routers";

import "./style.css";

const Header = () => {
  return <header>Naglowek</header>;
};

const Nav = () => {
  return (
    <nav>
      <a href="/">Strona glowna</a>
      <div />
      <a href="kontakt">Kontakt</a>
    </nav>
  );
};

const Main = props => {
  const routeResult = useRoutes(Routers);
  return <main>{routeResult}</main>;

  // const { title, name } = props;
  // const newTitle = title + " " + name;

  // return <main className="kontent-glowny strona-glowna" titleAtt={newTitle}>Content</main>;
};

const Aside = () => {
  return <aside>Marketing</aside>;
};

const Footer = () => {
  return <footer>Stopka</footer>;
};

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main title="Hello" name="Mariusz" />
      <Aside />
      <Footer />
    </>
  );
}
