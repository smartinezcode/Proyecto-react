import Banner from "./components/Banner"
import Banner2 from "./components/Banner2"
import ItemCount from "./components/ItemCount"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import PagaDespues from "./components/PagaDespues"
import Footer from "./components/footer"


function App() {
  return (
    <>
      
      <NavBar />
      <Banner />
      <PagaDespues />
      <ItemListContainer />
      <ItemCount stock={10} />
      <Banner2 />
      <Footer />


    </>
  )
}

export default App