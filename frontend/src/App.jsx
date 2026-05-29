import "./App.css";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
