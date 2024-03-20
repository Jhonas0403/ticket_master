import { useState, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
const NavBar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState("");

  useImperativeHandle(ref, () => ({
    search,
  }));
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSearch(search);
    }
  };
  return (
    <div
      ref={ref}
      style={{
        marginBottom: 14,
        width: "100%",
        display: "flex",
      }}
    >
      <div style={{ flex: 1, display: "flex" }}>
        <p
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Mi boletera
        </p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <input
          type="text"
          placeholder="Busca tu evento favorito"
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={search}
          style={{
            fontSize: 16,
            padding: "6px 12px",
            borderRadius: 4,
            border: "none",
            width: 200,
          }}
        />
        <Link
          to="/profile/my-info"
          style={{
            marginLeft: 24,
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Mi Perfil
        </Link>
      </div>
    </div>
  );
});
NavBar.displayName = "Navbar";

export default NavBar;
