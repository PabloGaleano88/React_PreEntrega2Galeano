import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"


// Pages
import ContactPage from"./pages/ContactPage/ContactPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import DetailPage from "./pages/DetailPage/DetailPage"
import CategoryPage from "./pages/CategoryPage/CategoryPage"

//components
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/detail/:id" element={<DetailPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/category/:categoryId" element={<CategoryPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
