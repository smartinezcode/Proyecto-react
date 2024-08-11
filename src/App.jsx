import Banner2 from "./components/Banner2"
import Footer from "./components/footer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import PagaDespues from "./components/PagaDespues"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContextProvider from "./components/context/cartContext"
import Cart from "./components/cart"


function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
          </Routes>
          <PagaDespues />
          <Banner2 />
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App