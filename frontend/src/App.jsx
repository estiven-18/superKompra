import "./App.css";

import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default App;
