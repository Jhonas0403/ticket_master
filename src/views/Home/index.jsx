import Events from "../../components/events";
import { useState, useRef } from "react";
import NavBar from "../../components/NavBar";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

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
};

export default Home;
