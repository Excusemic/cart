import React from "react"
import Navbar from "./Components/Navbar"
import Cart from "./Components/Cart"
import { useGlobalContext } from "./context"
import spinner from "./assets/loader.gif"
function App() {
  const { loading } = useGlobalContext()

  if (loading) {
    return (
      <div className="spinner">
        <img src={spinner} alt="Loading..." />
      </div>
    )
  } else {
    return (
      <>
        <Navbar />
        <Cart />
      </>
    )
  }
}

export default App
