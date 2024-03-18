import { useState,useRef } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Events from "./components/events";
import SignupForm from "./components/SignupForm";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef=useRef();

  const handleNavBarSearch = (term) => {
    console.log(containerRef.current);
    setSearchTerm(term);
  };

  return (
    <>
      <NavBar onSearch={handleNavBarSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />
      {/* <SignupForm /> */}
    </>
  );
}

export default App;
