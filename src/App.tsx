import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Store } from "./pages/store";
function App() {
  return (
    <ShoppingCartProvider>
  <NavBar />
  <Container className="mb-4">
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/store" element={<Store />}></Route>
      <Route path="/about" element={<About />}></Route> 
    </Routes>
  </Container>
    </ShoppingCartProvider>
  )
}

export default App
