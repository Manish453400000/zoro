import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./page/HomePage"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import UserPage from "./page/UserPage"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
